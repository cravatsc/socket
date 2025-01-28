export interface Message {
  username: string;
  message: string;
}

export interface ServerToClientEvents {
  message: (data: Message) => void;
}

export interface ClientToServerEvents {
  sendMessage: (data: Message) => void;
}
