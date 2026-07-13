package com.devflow.task.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devflow.task.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUserEmail(String userEmail);

    Optional<Task> findByIdAndUserEmail(Long id, String userEmail);
}