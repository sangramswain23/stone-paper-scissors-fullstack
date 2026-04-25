# stone-paper-scissors-fullstack
Full stack Stone Paper Scissors game using React and Spring Boot

## Overview

A 2-player web-based Stone-Paper-Scissors game built with a full-stack architecture.
The application supports 6-round gameplay, score tracking, winner declaration, and persistent storage of game history.

---

## Features

* 2-player gameplay (same device)
* Fixed 6 rounds per game
* Automatic winner calculation
* Round-wise score tracking
* Final winner declaration
* Save game results to database
* View game history

---

## Tech Stack

### Frontend

* React
* Axios
* React Router

### Backend

* Spring Boot
* REST APIs
* JPA / Hibernate

### Database

* H2 / PostgreSQL

---

## Architecture

Frontend → Backend (REST API) → Database

---

## Documentation

Detailed documentation available in `/docs`:

* PRD – Product Requirements
* FRD – Functional Requirements
* HLD – High Level Design
* LLD – Low Level Design
* API – API Contracts
* DB – Database Design
* TESTING – Test Cases

---

## Setup Instructions

### Backend

```bash
cd backend
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Base URL

```
http://localhost:8080/api
```

---

## Screenshots

later

---

## Future Improvements

* UI enhancements (Tailwind CSS)
* Authentication
* Multiplayer (online mode)
* Leaderboard system

---

## Author

Sangram
