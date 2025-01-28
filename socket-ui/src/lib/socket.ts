import { io, Socket } from 'socket.io-client';
import { ServerToClientEvents, ClientToServerEvents } from './types';

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;


export const initSocket = (): Socket<ServerToClientEvents, ClientToServerEvents> => {
  if (!socket) {
    socket = io(process.env.BACKEND_URL || 'http://localhost:3001', {
      transports: ['websocket', 'polling'],
      withCredentials: true,
      path: "/socket.io/",
    });
  }
  return socket;
}

export const getSocket = (): Socket<ServerToClientEvents, ClientToServerEvents> => {
  if (!socket) {
    throw new Error('Socket not initialized');
  }
  return socket;
}
