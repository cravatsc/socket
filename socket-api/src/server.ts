import express, { Express, Request, Response } from "express";
import { createServer } from "node:http";

const app: Express = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
