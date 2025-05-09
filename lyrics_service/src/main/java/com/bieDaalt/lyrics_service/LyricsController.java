package com.bieDaalt.lyrics_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/lyrics")
public class LyricsController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public ResponseEntity<LyricsDto> getLyrics(
            @RequestParam String artist,
            @RequestParam String title) {

        String url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
        LyricsDto dto = new LyricsDto();
        dto.setArtist(artist);
        dto.setSong(title);
        // Optionally set album/year/plays/duration based on static mapping, DB, or 3rd party APIs:
        dto.setAlbum("Not available");
        dto.setYear("Not available");
        dto.setPlays("Not available");
        dto.setDuration("Not available");

        try {
            ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
            // Parse the { lyrics: "..." } JSON response:
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            dto.setLyrics(root.has("lyrics") ? root.get("lyrics").asText() : "No lyrics found.");
            return ResponseEntity.ok(dto);
        } catch (Exception e) {
            dto.setLyrics("Lyrics not found for: " + artist + " - " + title);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(dto);
        }
    }
}