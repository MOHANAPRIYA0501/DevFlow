package com.devflow.task.service;

import java.util.List;

import com.devflow.task.dto.CreateTaskRequest;
import com.devflow.task.dto.TaskResponse;
import com.devflow.task.dto.UpdateTaskRequest;

public interface TaskService {

TaskResponse createTask(CreateTaskRequest request, String userEmail);

List<TaskResponse> getAllTasks(String userEmail);

TaskResponse getTaskById(Long id, String userEmail);

TaskResponse updateTask(Long id, UpdateTaskRequest request, String userEmail);

void deleteTask(Long id, String userEmail);
}
