package com.devflow.auth.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devflow.auth.dto.AuthResponse;
import com.devflow.auth.dto.LoginRequest;
import com.devflow.auth.dto.RegisterRequest;
import com.devflow.auth.entity.User;
import com.devflow.auth.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
     private final PasswordEncoder passwordEncoder;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

   public AuthResponse register(RegisterRequest request) {

    if (userRepository.existsByEmail(request.getEmail())) {
        throw new RuntimeException("Email already exists");
    }

    User user = new User();
    user.setFullName(request.getFullName());
    user.setEmail(request.getEmail());

    // Store password as a BCrypt hash
    user.setPassword(passwordEncoder.encode(request.getPassword()));

    userRepository.save(user);

    return new AuthResponse("User registered successfully", null);
}
public AuthResponse login(LoginRequest request) {

    Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

    if (optionalUser.isEmpty()) {
        throw new RuntimeException("Invalid email or password");
    }

    User user = optionalUser.get();

    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        throw new RuntimeException("Invalid email or password");
    }

    // JWT will be added later
    return new AuthResponse("Login successful", null);
}


}