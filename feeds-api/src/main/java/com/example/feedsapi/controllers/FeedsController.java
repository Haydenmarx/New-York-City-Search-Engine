package com.example.feedsapi.controllers;

import com.example.feedsapi.models.Feed;
import com.example.feedsapi.repositories.FeedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class FeedsController {

  @Autowired
  private FeedRepository feedRepository;

  @GetMapping("/")
  public Iterable<Feed> findAllFeeds() {
    return feedRepository.findAll();
  }

  @DeleteMapping("/{feedId}")
  public HttpStatus deleteFeedsById(@PathVariable Long feedId) {
    feedRepository.delete(feedId);
    return HttpStatus.OK;
  }

  @PostMapping("/")
  public Feed createNewFeed(@RequestBody Feed newFeed) {
    return feedRepository.save(newFeed);
  }

}