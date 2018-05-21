package com.example.feedsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class FeedsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(FeedsApiApplication.class, args);
	}
}