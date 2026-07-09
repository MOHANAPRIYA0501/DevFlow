package com.devflow.task.jwt;


import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

  public JwtAuthenticationFilter(JwtService jwtService) {
    this.jwtService = jwtService;
}

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

      String token = authHeader.substring(7);

System.out.println("TOKEN: " + token);

String email = jwtService.extractUsername(token);
System.out.println("EMAIL: " + email);

if (email != null &&
    SecurityContextHolder.getContext().getAuthentication() == null) {

    System.out.println("Checking token...");

    if (jwtService.isTokenValid(token, email)) {

        System.out.println("TOKEN VALID");

        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                        email,
                        null,
                        java.util.Collections.emptyList());

        SecurityContextHolder.getContext().setAuthentication(authentication);

        System.out.println("AUTHENTICATION SET");
    } else {
        System.out.println("TOKEN INVALID");
    }
}

        filterChain.doFilter(request, response);
    }
}