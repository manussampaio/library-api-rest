// (find, insertOne, updateOne, deleteOne...). O service chama estas funções e cuida das regras de negócio.
import { ObjectId } from "mongodb";
import { obterBanco } from "../config/database";

function colecao() {
  return obterBanco().collection("emprestimos");
}

export async function buscarTodas() {
  return colecao().find().toArray();
}

export async function buscarPorId(id) {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return colecao().findOne({ _id: new ObjectId(id) });
}

export async function inserir(emprestimo) {
  const resultado = await colecao().insertOne(emprestimo);
  return resultado.insertedId;
}

export async function atualizar(id, campos) {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  const resultado = await colecao().updateOne(
    { _id: new ObjectId(id) },
    { $set: campos },
  );
  return resultado.matchedCount > 0;
}

export async function remover(id) {
  if (!ObjectId.isValid(id)) {
    return false;
  }

  const resultado = await colecao().deleteOne({ _id: new ObjectId(id) });
  return resultado.deletedCount > 0;
}
