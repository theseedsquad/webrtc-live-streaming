import { Server } from "socket.io";

import {
  ListenEvents,
  EmitEvents,
  ServerSideEvents,
  SocketData,
} from "./interfaces/websockets";

const server = new Server<
  ListenEvents,
  EmitEvents,
  ServerSideEvents,
  SocketData
>();

server.on("connection", (socket) => {
  socket.on("hello", (alias) => {
    socket.data.alias = alias;

    const message = `Hello ${alias}`;
    socket.emit("welcome", message);
  });
});

export default server;
