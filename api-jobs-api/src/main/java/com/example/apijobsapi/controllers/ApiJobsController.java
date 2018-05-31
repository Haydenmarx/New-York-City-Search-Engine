package com.example.apijobsapi.controllers;

 import com.example.apijobsapi.models.ApiJob;
 import com.example.apijobsapi.repositories.ApiJobsApiRepository;
 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.http.HttpStatus;
 import org.springframework.web.bind.annotation.*;

@RestController
public class ApiJobsController {

  @Autowired
  private ApiJobsApiRepository apiJobsApiRepository;

  @GetMapping("/")
  public Iterable<ApiJob> findAllFeeds() {
    return apiJobsApiRepository.findAll();
  }

  @DeleteMapping("/{apiJobId}")
  public HttpStatus deleteFeedsById(@PathVariable Long apiJobId) {
    apiJobsApiRepository.delete(apiJobId);
    return HttpStatus.OK;
  }

  @PostMapping("/")
  public ApiJob createNewFeed(@RequestBody ApiJob newApiJob) {
    return apiJobsApiRepository.save(newApiJob);
  }

}