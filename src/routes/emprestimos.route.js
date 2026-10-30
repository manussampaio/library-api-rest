import { Router } from "express";
import {
  buscarEmprestimos,
  buscarEmprestimosPorID,
  buscarEmprestimosPorLeitor,
  adicionarEmprestimo,
  devolverEmprestimo,
} from "../controllers/emprestimos.controller.js";
import {
  verificarAtraso,
  verificarQuantidadeEmprestimos,
} from "../middlewares/middlewares.js";
import { verificarExemplarDisponivel } from "../middlewares/middleware.livros.js";

const emprestimosRouter = Router();

emprestimosRouter.get("/emprestimos", buscarEmprestimos);
emprestimosRouter.get("/emprestimos/leitor/:id", buscarEmprestimosPorLeitor);
emprestimosRouter.get("/emprestimos/:id", buscarEmprestimosPorID);
emprestimosRouter.post(
  "/emprestimos",
  [
    verificarAtraso,
    verificarQuantidadeEmprestimos,
    verificarExemplarDisponivel,
  ],
  adicionarEmprestimo,
);
emprestimosRouter.put("/emprestimos/:id", devolverEmprestimo);
export { emprestimosRouter };
