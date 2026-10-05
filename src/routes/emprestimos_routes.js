import { Router } from "express";
import { buscarEmprestimos, buscarEmprestimosPorID, adicionarEmprestimo, devolverEmprestimo } from "../controllers/emprestimo_controller.js";

const emprestimosRouter = Router();

emprestimosRouter.get("/emprestimos", buscarEmprestimos);
emprestimosRouter.get("/emprestimos/:id", buscarEmprestimosPorID);
emprestimosRouter.post("/emprestimos", adicionarEmprestimo);
emprestimosRouter.put("/emprestimos/:id", devolverEmprestimo);
export { emprestimosRouter }