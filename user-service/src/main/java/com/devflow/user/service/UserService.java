package com.devflow.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devflow.user.dto.CreateUserRequest;
import com.devflow.user.dto.UserResponse;
import com.devflow.user.entity.User;
import com.devflow.user.exception.UserNotFoundException;
import com.devflow.user.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    public List<UserResponse> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail()))
                .toList();
    }

    // Get user by email
    public UserResponse getUserByEmail(String email) {

        User user = userRepository.findByEmail(email)
               .orElseThrow(() -> new UserNotFoundException("User not found"));

        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail());
    }

    // Create user
    public UserResponse createUser(CreateUserRequest request) {

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        User savedUser = userRepository.save(user);

        return new UserResponse(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail());
    }
}