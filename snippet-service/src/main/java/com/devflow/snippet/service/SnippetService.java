package com.devflow.snippet.service;

import java.util.List;

import com.devflow.snippet.dto.CreateSnippetRequest;
import com.devflow.snippet.dto.SnippetResponse;
import com.devflow.snippet.dto.UpdateSnippetRequest;

public interface SnippetService {

    SnippetResponse createSnippet(CreateSnippetRequest request, String userEmail);

    List<SnippetResponse> getAllSnippets(String userEmail);

    SnippetResponse getSnippetById(Long id, String userEmail);

    SnippetResponse updateSnippet(Long id,
                                  UpdateSnippetRequest request,
                                  String userEmail);

    void deleteSnippet(Long id, String userEmail);
}