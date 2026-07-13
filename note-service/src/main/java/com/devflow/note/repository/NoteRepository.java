package com.devflow.note.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devflow.note.entity.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

    List<Note> findByUserEmail(String userEmail);

    Optional<Note> findByIdAndUserEmail(Long id, String userEmail);

}