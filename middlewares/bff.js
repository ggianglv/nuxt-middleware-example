import express from "express";
import { getUser } from "../services/user";

const app = express();

app.all("/api/user", async (req, res) => {
  const user = await getUser();

  res.json(user);
});

export default app;
