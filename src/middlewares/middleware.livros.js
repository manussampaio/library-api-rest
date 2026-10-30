import { livros } from "./controllers/livros_controller.js";

function verificarExemplarDisponivel(req, res, next) {
  const { livro } = req.body;

  const livroEncontrado = livros.find((l) => l.titulo === livro);
  if (!livroEncontrado) {
    return res
      .status(404)
      .json({ error: true, message: "Livro não encontrado!" });
  }

  const emprestimosAbertos = emprestimos.filter(
    (e) => e.livro === livro && !e.devolvido,
  ).length;

  if (emprestimosAbertos >= livroEncontrado.exemplares) {
    return res.status(422).json({
      error: true,
      message: "Exemplar indisponível!",
    });
  }

  next();
}

export { verificarExemplarDisponivel };
