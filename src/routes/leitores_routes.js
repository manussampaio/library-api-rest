import { Router } from "express";
import {
  buscarLeitores,
  buscarLeitoresPorID,
  adicionarLeitores,
  atualizarLeitores,
  deletarLeitor,
} from "../controllers/leitores_controller.js";
const leitoresRouter = Router();

leitoresRouter.get("/leitores", buscarLeitores);
leitoresRouter.get("/leitores/:id", buscarLeitoresPorID);
leitoresRouter.post("/leitores", adicionarLeitores);
leitoresRouter.put("/leitores/:id", atualizarLeitores);
leitoresRouter.delete("/leitores/:id", deletarLeitor);

export { leitoresRouter };
