package com.devflow.snippet.exception;

public class SnippetNotFoundException extends RuntimeException {

    public SnippetNotFoundException(String message) {
        super(message);
    }
}