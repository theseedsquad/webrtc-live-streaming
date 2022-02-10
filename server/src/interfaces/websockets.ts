export interface EmitEvents {
  welcome: (message: string) => void;
}

export interface ListenEvents {
  hello: (alias: string) => void;
}

export interface ServerSideEvents {
  ping: () => void;
}

export interface SocketData {
  alias: string;
}
