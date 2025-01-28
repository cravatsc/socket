import express, { Express, Request, Response } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app: Express = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  },
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log('socket:', socket);

  socket.on('sendMessage', (data: string) => {
    console.log('message received:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
