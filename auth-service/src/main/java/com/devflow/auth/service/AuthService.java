package com.devflow.auth.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devflow.auth.client.UserClient;
import com.devflow.auth.dto.AuthResponse;
import com.devflow.auth.dto.LoginRequest;
import com.devflow.auth.dto.RegisterRequest;
import com.devflow.auth.dto.UserRequest;
import com.devflow.auth.entity.User;
import com.devflow.auth.jwt.JwtService;
import com.devflow.auth.repository.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final UserClient userClient;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService,
                       UserClient userClient) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.userClient = userClient;
    }

    public AuthResponse register(RegisterRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();
        user.setFullName(request.getName());   // <-- Missing line

        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);

        UserRequest userRequest = new UserRequest(
                request.getName(),
                request.getEmail()
        );

try {
    System.out.println("Calling User Service...");
    userClient.createUser(userRequest);
    System.out.println("User Service call successful.");
} catch (Exception e) {
    e.printStackTrace();
    return new AuthResponse("ERROR: " + e.getMessage(), null);
}
        return new AuthResponse(
                "Registration successful",
                null
        );
    }

    public AuthResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

        return new AuthResponse(
                "Login successful",
                token
        );
    }
}