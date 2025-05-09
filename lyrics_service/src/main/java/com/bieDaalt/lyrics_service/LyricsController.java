package com.bieDaalt.lyrics_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/lyrics")
public class LyricsController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<String> getLyrics(
            @RequestParam String artist,
            @RequestParam String title) {

        String url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;

        try {
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            return ResponseEntity.ok(response.getBody());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Lyrics not found for: " + artist + " - " + title);
        }
    }
}


