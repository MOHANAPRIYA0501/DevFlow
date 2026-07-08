package com.devflow.auth.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.devflow.auth.dto.UserRequest;

@FeignClient(name = "user-service")
public interface UserClient {

    @PostMapping("/api/users")
    void createUser(@RequestBody UserRequest request);

}