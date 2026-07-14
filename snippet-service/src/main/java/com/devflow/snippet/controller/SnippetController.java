package com.devflow.snippet.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import com.devflow.snippet.dto.CreateSnippetRequest;
import com.devflow.snippet.dto.SnippetResponse;
import com.devflow.snippet.dto.UpdateSnippetRequest;
import com.devflow.snippet.service.SnippetService;

import java.util.List;

@RestController
@RequestMapping("/api/snippets")
public class SnippetController {

    private final SnippetService snippetService;

    public SnippetController(SnippetService snippetService) {
        this.snippetService = snippetService;
    }

    @PostMapping
    public ResponseEntity<SnippetResponse> createSnippet(
            @RequestBody CreateSnippetRequest request,
            Authentication authentication) {

        return new ResponseEntity<>(
                snippetService.createSnippet(request, authentication.getName()),
                HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<SnippetResponse>> getAllSnippets(
            Authentication authentication) {

        return ResponseEntity.ok(
                snippetService.getAllSnippets(authentication.getName()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<SnippetResponse> getSnippetById(
            @PathVariable Long id,
            Authentication authentication) {

        return ResponseEntity.ok(
                snippetService.getSnippetById(id, authentication.getName()));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SnippetResponse> updateSnippet(
            @PathVariable Long id,
            @RequestBody UpdateSnippetRequest request,
            Authentication authentication) {

        return ResponseEntity.ok(
                snippetService.updateSnippet(id, request, authentication.getName()));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSnippet(
            @PathVariable Long id,
            Authentication authentication) {

        snippetService.deleteSnippet(id, authentication.getName());

        return ResponseEntity.noContent().build();
    }
}