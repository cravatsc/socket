export interface ServerToClientEvents {
  message: (data: string) => void;
}

export interface ClientToServerEvents {
  sendMessage: (data: string) => void;
}