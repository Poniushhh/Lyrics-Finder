package com.bieDaalt.lyrics_web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class LyricsWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(LyricsWebApplication.class, args);
	}

}
