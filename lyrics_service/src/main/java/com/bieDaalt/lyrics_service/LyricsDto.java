package com.bieDaalt.lyrics_service;


public class LyricsDto {
    private String artist;
    private String song;
    private String lyrics;
    private String album;
    private String year;
    private String plays;
    private String duration;

    // Getters
    public String getArtist() { return artist; }
    public String getSong() { return song; }
    public String getLyrics() { return lyrics; }
    public String getAlbum() { return album; }
    public String getYear() { return year; }
    public String getPlays() { return plays; }
    public String getDuration() { return duration; }

    // Setters
    public void setArtist(String artist) { this.artist = artist; }
    public void setSong(String song) { this.song = song; }
    public void setLyrics(String lyrics) { this.lyrics = lyrics; }
    public void setAlbum(String album) { this.album = album; }
    public void setYear(String year) { this.year = year; }
    public void setPlays(String plays) { this.plays = plays; }
    public void setDuration(String duration) { this.duration = duration; }
}