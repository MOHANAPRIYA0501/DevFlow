package com.devflow.snippet.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devflow.snippet.dto.CreateSnippetRequest;
import com.devflow.snippet.dto.SnippetResponse;
import com.devflow.snippet.dto.UpdateSnippetRequest;
import com.devflow.snippet.entity.Snippet;
import com.devflow.snippet.exception.SnippetNotFoundException;
import com.devflow.snippet.repository.SnippetRepository;

@Service
public class SnippetServiceImpl implements SnippetService {

    private final SnippetRepository snippetRepository;

    public SnippetServiceImpl(SnippetRepository snippetRepository) {
        this.snippetRepository = snippetRepository;
    }

    @Override
    public SnippetResponse createSnippet(CreateSnippetRequest request, String userEmail) {

        Snippet snippet = new Snippet();

        snippet.setTitle(request.getTitle());
        snippet.setCode(request.getCode());
        snippet.setLanguage(request.getLanguage());
        snippet.setDescription(request.getDescription());
        snippet.setUserEmail(userEmail);

        snippet.setCreatedAt(LocalDateTime.now());
        snippet.setUpdatedAt(LocalDateTime.now());

        Snippet savedSnippet = snippetRepository.save(snippet);

        return mapToResponse(savedSnippet);
    }

    @Override
    public List<SnippetResponse> getAllSnippets(String userEmail) {

        return snippetRepository.findByUserEmail(userEmail)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public SnippetResponse getSnippetById(Long id, String userEmail) {

        Snippet snippet = snippetRepository
                .findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new SnippetNotFoundException("Snippet not found with id: " + id));

        return mapToResponse(snippet);
    }

    @Override
    public SnippetResponse updateSnippet(Long id,
                                         UpdateSnippetRequest request,
                                         String userEmail) {

        Snippet snippet = snippetRepository
                .findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new SnippetNotFoundException("Snippet not found with id: " + id));

        if (request.getTitle() != null) {
            snippet.setTitle(request.getTitle());
        }

        if (request.getCode() != null) {
            snippet.setCode(request.getCode());
        }

        if (request.getLanguage() != null) {
            snippet.setLanguage(request.getLanguage());
        }

        if (request.getDescription() != null) {
            snippet.setDescription(request.getDescription());
        }

        snippet.setUpdatedAt(LocalDateTime.now());

        Snippet updatedSnippet = snippetRepository.save(snippet);

        return mapToResponse(updatedSnippet);
    }

    @Override
    public void deleteSnippet(Long id, String userEmail) {

        Snippet snippet = snippetRepository
                .findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new SnippetNotFoundException("Snippet not found with id: " + id));

        snippetRepository.delete(snippet);
    }

    private SnippetResponse mapToResponse(Snippet snippet) {

        SnippetResponse response = new SnippetResponse();

        response.setId(snippet.getId());
        response.setTitle(snippet.getTitle());
        response.setCode(snippet.getCode());
        response.setLanguage(snippet.getLanguage());
        response.setDescription(snippet.getDescription());
        response.setUserEmail(snippet.getUserEmail());
        response.setCreatedAt(snippet.getCreatedAt());
        response.setUpdatedAt(snippet.getUpdatedAt());

        return response;
    }
}