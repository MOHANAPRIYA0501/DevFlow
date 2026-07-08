package com.devflow.task.entity;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskStatus status;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TaskPriority priority;

    @Column(nullable = false)
    private String userEmail;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public Task() {
    }

    // Generate constructors
    // Generate getters & setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title; 
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {    
        this.description = description;
    }
    public TaskStatus getStatus() {
        return status;   }
    public void setStatus(TaskStatus status) {
        this.status = status;   }
    public TaskPriority getPriority() {
        return priority;    }
    public void setPriority(TaskPriority priority) {
        this.priority = priority;    }
    public String getUserEmail() {
        return userEmail;    }
    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;    }
    public LocalDateTime getCreatedAt() {
        return createdAt;    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;    }
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;    }    
          
}