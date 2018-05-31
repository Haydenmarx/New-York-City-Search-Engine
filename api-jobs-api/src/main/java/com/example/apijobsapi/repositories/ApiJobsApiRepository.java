package com.example.apijobsapi.repositories;

import com.example.apijobsapi.models.ApiJob;
import org.springframework.data.repository.CrudRepository;

public interface ApiJobsApiRepository extends CrudRepository<ApiJob, Long> {

}