import { emprestimos } from "./controllers/emprestimos_controller.js";
import { livros } from "./controllers/livros_controller.js";

function verificarAtraso(req, res, next) {
  const leitor = req.body.leitor;
  const agora = new Date();

  let temAtraso = false;

  for (let i = 0; i < emprestimos.length; i++) {
    if (
      emprestimos[i].leitor === leitor &&
      emprestimos[i].devolvido === false &&
      new Date(emprestimos[i].dataDevolucao) < agora
    ) {
      temAtraso = true;
    }
  }

  if (temAtraso) {
    return res.status(422).json({
      error: true,
      message: "Leitor possui livro em atraso!",
    });
  }

  next();
}

function verificarQuantidadeEmprestimos(req, res, next) {
  const { leitor } = req.body;
  const emprestimosLeitor = emprestimos.filter(
    (e) => e.leitor === leitor && !e.devolvido,
  );

  if (emprestimosLeitor.length >= 3) {
    return res.status(422).json({
      error: true,
      message: "Leitor já possui 3 empréstimos em aberto!",
    });
  }

  next();
}
