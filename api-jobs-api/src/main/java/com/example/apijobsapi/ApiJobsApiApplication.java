package com.example.apijobsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ApiJobsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiJobsApiApplication.class, args);
	}
}
