package com.devflow.snippet.repository;
import com.devflow.snippet.entity.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SnippetRepository extends JpaRepository<Snippet, Long> {

    List<Snippet> findByUserEmail(String userEmail);

    Optional<Snippet> findByIdAndUserEmail(Long id, String userEmail);
}