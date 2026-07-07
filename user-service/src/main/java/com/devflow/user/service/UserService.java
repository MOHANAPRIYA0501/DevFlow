package com.devflow.user.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.devflow.user.entity.User;
import com.devflow.user.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get user by email
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // Save user
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}