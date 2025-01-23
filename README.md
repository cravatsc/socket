# Socket App

A simple app to test socket communication between a frontend and backend app. The backend app is a simple Node.js app that uses the `socket.io` library to communicate with the frontend app. The frontend app is a simple React app that uses the `socket.io-client` library to communicate with the backend app. The backend app will also consume messages from a Kafka topic and send them to the frontend app based on the user information provided in the socket connection.

## Prerequisites

- Docker
- Docker Compose

## Setup

```bash
docker compose build
```

## Run

```bash
docker compose up -d
```

## Stop

```bash
docker compose down
```
