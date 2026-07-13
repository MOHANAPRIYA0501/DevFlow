package com.devflow.note.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devflow.note.dto.CreateNoteRequest;
import com.devflow.note.dto.NoteResponse;
import com.devflow.note.dto.UpdateNoteRequest;
import com.devflow.note.entity.Note;
import com.devflow.note.exception.NoteNotFoundException;
import com.devflow.note.repository.NoteRepository;

@Service
public class NoteServiceImpl implements NoteService {

    private final NoteRepository noteRepository;

    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

   @Override
public NoteResponse createNote(CreateNoteRequest request, String userEmail) {

    Note note = new Note();

    note.setTitle(request.getTitle());
    note.setContent(request.getContent());
    note.setUserEmail(userEmail);

    note.setCreatedAt(LocalDateTime.now());
    note.setUpdatedAt(LocalDateTime.now());

    Note savedNote = noteRepository.save(note);

    return mapToResponse(savedNote);
}
@Override
public List<NoteResponse> getAllNotes(String userEmail) {

    return noteRepository.findByUserEmail(userEmail)
            .stream()
            .map(this::mapToResponse)
            .toList();
}

   @Override
public NoteResponse getNoteById(Long id, String userEmail) {

    Note note = noteRepository
            .findByIdAndUserEmail(id, userEmail)
            .orElseThrow(() ->
                    new NoteNotFoundException("Note not found with id: " + id));

    return mapToResponse(note);
}

   @Override
public NoteResponse updateNote(Long id, UpdateNoteRequest request, String userEmail) {

    Note note = noteRepository
            .findByIdAndUserEmail(id, userEmail)
            .orElseThrow(() ->
                    new NoteNotFoundException("Note not found with id: " + id));

    if (request.getTitle() != null) {
        note.setTitle(request.getTitle());
    }

    if (request.getContent() != null) {
        note.setContent(request.getContent());
    }

    note.setUpdatedAt(LocalDateTime.now());

    Note updatedNote = noteRepository.save(note);

    return mapToResponse(updatedNote);
}

  @Override
public void deleteNote(Long id, String userEmail) {

    Note note = noteRepository
            .findByIdAndUserEmail(id, userEmail)
            .orElseThrow(() ->
                    new NoteNotFoundException("Note not found with id: " + id));

    noteRepository.delete(note);
}
    private NoteResponse mapToResponse(Note note) {

    NoteResponse response = new NoteResponse();

    response.setId(note.getId());
    response.setTitle(note.getTitle());
    response.setContent(note.getContent());
    response.setUserEmail(note.getUserEmail());
    response.setCreatedAt(note.getCreatedAt());
    response.setUpdatedAt(note.getUpdatedAt());

    return response;
}
}
