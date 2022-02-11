export interface EmitEvents {
  welcome: (message: string) => void;
  offer: (socketId: string, offer: any) => void;
  answer: (socketId: string, answer: any) => void;
  candidate: (socketId: string, candidate: any) => void;
}

export interface ListenEvents {
  hello: (alias: string) => void;
  createLive: (id: string) => void;
  joinLive: (id: string, fn: (socketId: string) => void) => void;
  offer: (socketId: string, offer: any) => void;
  answer: (socketId: string, answer: any) => void;
  candidate: (socketId: string, candidate: any) => void;
}

export interface ServerSideEvents {
  ping: () => void;
}

export interface SocketData {
  alias: string;
}
