import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

import {
  ListenEvents,
  EmitEvents,
  ServerSideEvents,
  SocketData,
} from "./interfaces/websockets";

const options = {
  serveClient: false,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
};

const server = new Server<
  ListenEvents,
  EmitEvents,
  ServerSideEvents,
  SocketData
>(options);

server.on("connection", (socket) => {
  socket.on("hello", (alias) => {
    socket.data.alias = alias;

    const message = `Hello ${alias}`;
    socket.emit("welcome", message);
  });
});

export default (http: HttpServer) => {
  server.attach(http);
  instrument(server, { auth: false });
};
