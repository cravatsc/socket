interface ServerToClientEvents {
  message: (data: string) => void;
}

interface ClientToServerEvents {
  sendMessage: (data: string) => void;
}