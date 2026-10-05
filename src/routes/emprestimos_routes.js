import { Router } from "express";
import { buscarEmprestimos, buscarEmprestimosPorID, buscarEmprestimosPorLeitor, adicionarEmprestimo, devolverEmprestimo } from "../controllers/emprestimos_controller.js";

const emprestimosRouter = Router();

emprestimosRouter.get("/emprestimos", buscarEmprestimos);
emprestimosRouter.get("/emprestimos/leitor/:id", buscarEmprestimosPorLeitor);
emprestimosRouter.get("/emprestimos/:id", buscarEmprestimosPorID);
emprestimosRouter.post("/emprestimos", adicionarEmprestimo);
emprestimosRouter.put("/emprestimos/:id", devolverEmprestimo);
export { emprestimosRouter }