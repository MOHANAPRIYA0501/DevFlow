package com.devflow.task.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.devflow.task.dto.CreateTaskRequest;
import com.devflow.task.dto.TaskResponse;
import com.devflow.task.dto.UpdateTaskRequest;
import com.devflow.task.entity.Task;
import com.devflow.task.entity.TaskStatus;
import com.devflow.task.exception.TaskNotFoundException;
import com.devflow.task.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public TaskResponse createTask(CreateTaskRequest request, String userEmail) {

        Task task = new Task();

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setPriority(request.getPriority());
        task.setUserEmail(userEmail);

        if (request.getStatus() == null) {
            task.setStatus(TaskStatus.TODO);
        } else {
            task.setStatus(request.getStatus());
        }

        task.setCreatedAt(LocalDateTime.now());
        task.setUpdatedAt(LocalDateTime.now());

        Task savedTask = taskRepository.save(task);

        return mapToResponse(savedTask);
    }

    @Override
    public List<TaskResponse> getAllTasks(String userEmail) {

        return taskRepository.findByUserEmail(userEmail)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    public TaskResponse getTaskById(Long id, String userEmail) {

        Task task = taskRepository.findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new TaskNotFoundException("Task not found with id: " + id));

        return mapToResponse(task);
    }

    @Override
    public TaskResponse updateTask(Long id, UpdateTaskRequest request, String userEmail) {

        Task task = taskRepository.findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new TaskNotFoundException("Task not found with id: " + id));

        if (request.getTitle() != null) {
            task.setTitle(request.getTitle());
        }

        if (request.getDescription() != null) {
            task.setDescription(request.getDescription());
        }

        if (request.getPriority() != null) {
            task.setPriority(request.getPriority());
        }

        if (request.getStatus() != null) {
            task.setStatus(request.getStatus());
        }

        task.setUpdatedAt(LocalDateTime.now());

        Task updatedTask = taskRepository.save(task);

        return mapToResponse(updatedTask);
    }

    @Override
    public void deleteTask(Long id, String userEmail) {

        Task task = taskRepository.findByIdAndUserEmail(id, userEmail)
                .orElseThrow(() ->
                        new TaskNotFoundException("Task not found with id: " + id));

        taskRepository.delete(task);
    }

    private TaskResponse mapToResponse(Task task) {

        TaskResponse response = new TaskResponse();

        response.setId(task.getId());
        response.setTitle(task.getTitle());
        response.setDescription(task.getDescription());
        response.setPriority(task.getPriority());
        response.setStatus(task.getStatus());
        response.setUserEmail(task.getUserEmail());
        response.setCreatedAt(task.getCreatedAt());
        response.setUpdatedAt(task.getUpdatedAt());

        return response;
    }
}