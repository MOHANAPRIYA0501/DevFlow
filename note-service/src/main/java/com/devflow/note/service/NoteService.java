package com.devflow.note.service;

import java.util.List;

import com.devflow.note.dto.CreateNoteRequest;
import com.devflow.note.dto.NoteResponse;
import com.devflow.note.dto.UpdateNoteRequest;

public interface NoteService {

    NoteResponse createNote(CreateNoteRequest request, String userEmail);

    List<NoteResponse> getAllNotes(String userEmail);

    NoteResponse getNoteById(Long id, String userEmail);

    NoteResponse updateNote(Long id, UpdateNoteRequest request, String userEmail);

    void deleteNote(Long id, String userEmail);
}