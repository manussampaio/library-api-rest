import { Router } from "express";
import { buscarLivro, buscarLivroPorID, adicionarLivro, atualizarLivro, deletarLivro } from "../controllers/livros_controller.js";
const livrosRouter = Router();

livrosRouter.get("/livros", buscarLivro);
livrosRouter.get("/livros/:id", buscarLivroPorID);
livrosRouter.post("/livros", adicionarLivro);
livrosRouter.put("/livros/:id", atualizarLivro);
livrosRouter.delete("/livros/:id", deletarLivro);


export { livrosRouter }