import * as express from "express";

const app = express();

app.use(
  express.static(__dirname + "/../node_modules/@socket.io/admin-ui/ui/dist")
);

export default app;
