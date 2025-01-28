export interface Message {
  username: string;
  message: string;
}

interface ServerToClientEvents {
  message: (data: Message) => void;
}

interface ClientToServerEvents {
  sendMessage: (data: Message) => void;
}
