const leitores = [];

//get
const buscarLeitores = (req, res) => {
  console.log("Buscando Leitores...");

  res.json(leitores);
};

//get com id
const buscarLeitoresPorID = (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const leitor = leitores.find((leitor) => leitor.id === idNumber);

  console.log("Buscando Leitores por ID...");
  if (leitor) {
    res.json(leitor);
  } else {
    res.status(404).send("Esse leitor não existe!");
  }
};

//post
const adicionarLeitores = (req, res) => {
  const { id, nome, email, telefone, endereco } = req.body;

  if (!id || !nome || !email || !telefone || !endereco) {
    res.status(422).json({
      error: true,
      message: "Dados Inválidos!",
    });
    return;
  }

  const leitor = {
    id,
    nome,
    email,
    telefone,
    endereco,
  };

  leitores.push(leitor);

  if (leitor) {
    res.status(201).json({
      error: false,
      message: "Leitor Adicionado!",
      leitor: leitor,
    });
  } else {
    res.status(422).json({
      error: true,
      message: "Dados Inválidos!",
    });
  }
};

//put
const atualizarLeitores = (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const index = leitores.findIndex((leitor) => leitor.id === idNumber);

  if (index === -1) {
    return res.status(404).json({
      error: true,
      message: "Leitor não encontrado!",
    });
  }

  const leitorAtualizado = {
    id: id,
    ...req.body,
  };

  leitores[index] = leitorAtualizado;

  console.log("Leitor atualizado com sucesso!");
  if (leitorAtualizado) {
    res.json({
      error: false,
      message: "Leitor atualizado com sucesso!",
      leitor: leitorAtualizado,
    });
  } else {
    res.json({
      error: true,
      message: "Alteração NÃO realizada!",
    });
  }
};

//delete
const deletarLeitor = (req, res) => {
  const { id } = req.params;
  const idNumber = parseInt(id);
  const index = leitores.findIndex((leitor) => leitor.id === idNumber);

  if (index !== -1) {
    leitores.splice(index, 1);
    res.json({
      error: false,
      message: "Leitor deletado!",
    });
  } else {
    res.json({
      error: true,
      message: "Leitor NÃO deletado!",
    });
  }
};

export {
  buscarLeitores,
  buscarLeitoresPorID,
  adicionarLeitores,
  atualizarLeitores,
  deletarLeitor,
  leitores,
};
