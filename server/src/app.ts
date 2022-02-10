import * as express from "express";

const app = express();

app.get("/", (_, response) => {
  response.send("Hello world!");
});

export default app;
