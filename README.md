# 🚀 DevFlow - Developer Productivity Platform

A full-stack developer productivity platform built using **Spring Boot Microservices** and **React**.

DevFlow helps developers manage their daily workflow by providing a centralized platform for:

* ✅ Task Management
* ✅ Personal Notes
* ✅ Code Snippet Management
* ✅ Search & Dashboard Analytics

The project follows a production-style microservices architecture with secure JWT authentication, API Gateway routing, service discovery, and a modern React dashboard.

---

# ✨ Features

## 🔐 Authentication & Security

* User registration and login
* JWT-based authentication
* BCrypt password encryption
* Protected API routes
* Role-based authorization structure
* Secure communication through API Gateway

---

## 📋 Task Management

Users can:

* Create tasks
* Update tasks
* Delete tasks
* Search tasks
* Manage personal task data

Each task is securely linked to the authenticated user.

---

## 📝 Notes Management

Users can:

* Create personal notes
* Edit notes
* Delete notes
* Search notes

---

## 💻 Code Snippet Management

Developers can store reusable code snippets.

Features:

* Add snippets
* Store programming language
* Add descriptions
* View formatted code blocks
* Search snippets

---

## 📊 Dashboard

Modern developer dashboard containing:

* Statistics cards
* Global search
* Module-based navigation
* Responsive UI
* Loading states
* Empty states
* Confirmation dialogs

---

# 🏗️ System Architecture

DevFlow follows a distributed microservices architecture.

```
                    React Frontend
                          |
                          |
                    API Gateway
                       :8080
                          |
        ---------------------------------
        |              |                |
   Auth Service   User Service    Task Service
      :8081           :8082          :8083

        |
        |
   -------------------------------
   |              |              |
 Note Service  Snippet Service  Eureka Server
    :8084          :8085            :8761
```

---

# 🔥 Microservices

## Eureka Server

Responsibilities:

* Service registration
* Service discovery
* Microservice communication management

---

## API Gateway

Responsibilities:

* Single entry point for frontend
* Request routing
* JWT validation
* Centralized security handling

---

## Auth Service

Responsibilities:

* User registration
* Login authentication
* Password encryption
* JWT token generation

---

## User Service

Responsibilities:

* User profile management
* User-related operations

---

## Task Service

Responsibilities:

* Task CRUD operations
* User-specific task authorization

---

## Note Service

Responsibilities:

* Personal note management
* Secure user-based CRUD operations

---

## Snippet Service

Responsibilities:

* Code snippet storage
* Programming language management
* Developer content organization

---

# 🔐 JWT Authentication Flow

```
User Login
    |
    |
Auth Service validates credentials
    |
    |
JWT Token Generated
    |
    |
Frontend stores token
    |
    |
API Request with JWT Header
    |
    |
API Gateway validates token
    |
    |
Request forwarded to Microservice
    |
    |
User data returned
```

---

# 🛠️ Tech Stack

## Backend

* Java 21
* Spring Boot 3.5.x
* Spring Security
* Spring Cloud Gateway
* Spring Cloud Netflix Eureka
* Spring Data JPA
* Hibernate
* JWT Authentication
* Maven

---

## Frontend

* React 19
* Vite
* React Router
* Axios
* Tailwind CSS
* React Hot Toast

---

## Database

* MySQL

Separate databases are maintained for each service:

```
devflow_auth
devflow_user
devflow_task
devflow_note
devflow_snippet
```

---

# 📂 Project Structure

## Backend

```
devflow-backend

├── api-gateway
├── auth-service
├── user-service
├── task-service
├── note-service
├── snippet-service
└── eureka-server
```

---

## Frontend

```
devflow-frontend

src
│
├── api
│
├── components
│
├── pages
│
├── routes
│
└── services
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## Tasks

```
GET    /api/tasks

POST   /api/tasks

PUT    /api/tasks/{id}

DELETE /api/tasks/{id}
```

---

## Notes

```
GET    /api/notes

POST   /api/notes

PUT    /api/notes/{id}

DELETE /api/notes/{id}
```

---

## Snippets

```
GET    /api/snippets

POST   /api/snippets

PUT    /api/snippets/{id}

DELETE /api/snippets/{id}
```

---

# 🖥️ Screenshots

## Login

(Add screenshot here)

---

## Register

(Add screenshot here)

---

## Dashboard

(Add screenshot here)

---

## Tasks

(Add screenshot here)

---

## Notes

(Add screenshot here)

---

## Snippets

(Add screenshot here)

---

# ⚙️ Installation & Setup

## Backend Setup

Clone repository:

```bash
git clone <repository-url>
```

Navigate:

```bash
cd devflow-backend
```

Build project:

```bash
mvn clean install
```

Run services:

Start in this order:

1. Eureka Server
2. API Gateway
3. Auth Service
4. User Service
5. Task Service
6. Note Service
7. Snippet Service

---

## Frontend Setup

Navigate:

```bash
cd devflow-frontend
```

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

---

# 🚧 Future Improvements

Planned enhancements:

* Docker containerization
* CI/CD pipeline
* Cloud deployment
* Redis caching
* File attachment support
* User profile customization
* Notification system
* AI-powered developer assistant

---

# 👨‍💻 Project Highlights

This project demonstrates:

* Microservices architecture
* Secure authentication design
* API Gateway implementation
* Service discovery
* Distributed backend development
* React frontend architecture
* Clean separation of responsibilities

---

# 📌 Author

Developer Portfolio Project

Built with Java + Spring Boot + React

## Screenshots

### Login

![Login](screenshots/login.png)

### Dashboard

![Dashboard](screenshots/dashboard.png)