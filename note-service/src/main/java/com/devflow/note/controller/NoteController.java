package com.devflow.note.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devflow.note.dto.CreateNoteRequest;
import com.devflow.note.dto.NoteResponse;
import com.devflow.note.dto.UpdateNoteRequest;
import com.devflow.note.service.NoteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/notes")
@Validated
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @PostMapping
    public ResponseEntity<NoteResponse> createNote(
            @Valid @RequestBody CreateNoteRequest request,
            Authentication authentication) {
System.out.println("=== CREATE NOTE API HIT ===");
        String userEmail = authentication.getName();

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(noteService.createNote(request, userEmail));
                
    }

    @GetMapping
    public ResponseEntity<List<NoteResponse>> getAllNotes(
            Authentication authentication) {

        String userEmail = authentication.getName();

        return ResponseEntity.ok(noteService.getAllNotes(userEmail));
    }

    @GetMapping("/{id}")
    public ResponseEntity<NoteResponse> getNoteById(
            @PathVariable Long id,
            Authentication authentication) {

        String userEmail = authentication.getName();

        return ResponseEntity.ok(noteService.getNoteById(id, userEmail));
    }

    @PutMapping("/{id}")
    public ResponseEntity<NoteResponse> updateNote(
            @PathVariable Long id,
            @RequestBody UpdateNoteRequest request,
            Authentication authentication) {

        String userEmail = authentication.getName();

        return ResponseEntity.ok(
                noteService.updateNote(id, request, userEmail));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(
            @PathVariable Long id,
            Authentication authentication) {

        String userEmail = authentication.getName();

        noteService.deleteNote(id, userEmail);

        return ResponseEntity.noContent().build();
    }
}