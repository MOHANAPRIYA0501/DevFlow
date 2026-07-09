package com.devflow.task.service;

import java.util.List;

import com.devflow.task.dto.CreateTaskRequest;
import com.devflow.task.dto.TaskResponse;
import com.devflow.task.dto.UpdateTaskRequest;

public interface TaskService {

TaskResponse createTask(CreateTaskRequest request, String userEmail);
    List<TaskResponse> getAllTasks();

    TaskResponse getTaskById(Long id);

    TaskResponse updateTask(Long id, UpdateTaskRequest request);

    void deleteTask(Long id);
}
