package com.example.feedsapi.repositories;

import com.example.feedsapi.models.Feed;
import org.springframework.data.repository.CrudRepository;

public interface FeedRepository extends CrudRepository<Feed, Long> {

}