import express from "express";
import { app } from "./app.js";

app.listen(3333, () =>
  console.log("O servidor está rodando na porta http://localhost:3333"),
);
