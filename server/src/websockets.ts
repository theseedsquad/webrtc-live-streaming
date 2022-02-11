import { Server as HttpServer } from "http";
import { Server } from "socket.io";

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

const getSocket = (socketId: string) => server.sockets.sockets.get(socketId);
const live: Record<string, string> = {};

server.on("connection", (socket) => {
  socket.on("hello", (alias) => {
    socket.data.alias = alias;

    const message = `Hello ${alias}`;
    socket.emit("welcome", message);
  });

  socket.on("createLive", (id) => {
    live[id] = socket.id;
  });

  socket.on("joinLive", (id, ack) => {
    ack(live[id]);
  });

  socket.on("offer", (socketId, offer) => {
    getSocket(socketId)?.emit("offer", socket.id, offer);
  });

  socket.on("answer", (socketId, answer) => {
    getSocket(socketId)?.emit("answer", socket.id, answer);
  });

  socket.on("candidate", (socketId, candidate) => {
    getSocket(socketId)?.emit("candidate", socket.id, candidate);
  });
});

export default (http: HttpServer) => {
  server.attach(http);
};
