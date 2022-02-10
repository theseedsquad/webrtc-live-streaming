import { Router } from "express";

const router = Router();

router.get("/", (_, response) => {
  response.send("Hello world!");
});

export default router;
