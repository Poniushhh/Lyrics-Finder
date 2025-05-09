package com.bieDaalt.lyrics_web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriUtils;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api")
public class LyricsController {
    @Autowired
    private DiscoveryClient discoveryClient; // or use LoadBalancerClient

    @GetMapping("/lyrics")
    public ResponseEntity<?> getLyrics(
            @RequestParam String artist,
            @RequestParam String song
    ) {
        // Find all available lyrics_service instances
        List<ServiceInstance> instances = discoveryClient.getInstances("lyrics_service");
        if (instances.isEmpty()) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body("No lyrics service available");
        }
        // Pick one instance (round-robin/load-balancer in prod)
        ServiceInstance service = instances.get(0);

        String baseUri = service.getUri().toString();
        String url = baseUri + "/lyrics?artist=" +
                UriUtils.encode(artist, StandardCharsets.UTF_8) +
                "&title=" + UriUtils.encode(song, StandardCharsets.UTF_8);

        System.out.println("Calling lyrics_service instance at: " + baseUri);

        RestTemplate restTemplate = new RestTemplate();
        System.out.println("Calling URL: " + url);
        try {
            // Call the lyrics_service
            ResponseEntity<LyricsDto> response = restTemplate.getForEntity(url, LyricsDto.class);

            // Return the response from the lyrics_service
            return ResponseEntity.status(response.getStatusCode()).body(response.getBody());
        } catch (Exception e) {
            // Handle any errors that occur while calling the service
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching lyrics: " + e.getMessage());
        }

    }
}