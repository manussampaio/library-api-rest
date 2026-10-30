# api-biblioteca

API REST para gerenciamento de uma biblioteca e seus empréstimos de livros (Tema 2), construída com [Express](https://expressjs.com/) e JavaScript.

Os dados são armazenados em memória, em arrays, e por isso são perdidos quando o servidor é reiniciado.

## Requisitos

- [Node.js](https://nodejs.org/)
- npm

## Instalação

```bash
npm install
```

## Execução

```bash
node  ./src/server.js
```

O servidor sobe na porta **3333**:

```
API em http://localhost:3333
```

## Estrutura do projeto

```
library-api-rest/
├── src/
│   ├── app.js                           # Configura o Express (middlewares e rotas)
│   ├── server.js                        # Inicia o servidor HTTP na porta 3333
│   ├── routes/
│   │   ├── livros.route.js              # Define as rotas de /livros
│   │   ├── leitores.route.js            # Define as rotas de /leitores
│   │   └── emprestimos.route.js         # Define as rotas de /emprestimos
│   ├── controllers/
│   │   ├── livros.controller.js         # Trata requisição e resposta de livros
│   │   ├── leitores.controller.js       # Trata requisição e resposta de leitores
│   │   └── emprestimos.controller.js    # Trata requisição e resposta de empréstimos
│   └── middlewares/
│       ├── middleware.livros.js         # Verificações relacionadas aos livros
│       └── middleware.emprestimo.js     # Verificações relacionadas aos empréstimos
├── .gitignore
├── package.json
└── package-lock.json
```

## Entidades

- **Livros:** cadastro e gerenciamento dos livros.
- **Usuários:** cadastro e gerenciamento dos usuários.
- **Empréstimos:** registro e devolução de livros.

## Regras de negócio

Implementadas como middlewares:

| Middleware                       | Regra                                                           |
| -------------------------------- | --------------------------------------------------------------- |
| `verificarExemplarDisponivel`    | Só é possível emprestar um livro se houver exemplar disponível  |
| `verificarQuantidadeEmprestimos` | Cada usuário pode ter no máximo 3 empréstimos ativos            |
| `verificarAtraso`                | Usuários com empréstimos atrasados não podem pegar novos livros |

## Endpoints

Base URL: `http://localhost:3333`

### Livros

#### `GET /livros`

Retorna a lista de todos os livros.

**Resposta** – `200 OK`

```json
[
  {
    "id": 1,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "exemplares": 3
  }
]
```

#### `POST /livros`

Cadastra um novo livro.

**Corpo da requisição** (`application/json`):

| Campo        | Tipo   | Obrigatório | Regras |
| ------------ | ------ | ----------- | ------ |
| `titulo`     | string | sim         | ...    |
| `autor`      | string | sim         | ...    |
| `exemplares` | number | sim         | ...    |

**Resposta de sucesso** – `201 Created`

#### `PUT /livros/:id`

Atualiza os dados de um livro.

#### `DELETE /livros/:id`

Remove um livro.

### Usuários

#### `GET /usuarios`

Retorna a lista de todos os usuários.

#### `POST /usuarios`

Cadastra um novo usuário.

| Campo  | Tipo   | Obrigatório | Regras |
| ------ | ------ | ----------- | ------ |
| `nome` | string | sim         | ...    |

#### `PUT /usuarios/:id`

Atualiza os dados de um usuário.

#### `DELETE /usuarios/:id`

Remove um usuário.

### Empréstimos

#### `GET /emprestimos`

Consulta os empréstimos registrados.

#### `POST /emprestimos`

Registra um empréstimo. Passa pelas verificações de atraso, de quantidade de empréstimos e de exemplar disponível.

**Resposta de erro** – `400 Bad Request`

```json
{ "error": "Mensagem do erro." }
```

#### `PUT /emprestimos/:id/devolucao`

Registra a devolução de um livro.

#### `GET /livros/disponiveis`

Lista os livros com exemplares disponíveis.

#### `GET /emprestimos/atrasados`

Lista os empréstimos atrasados.

## Modelo de dados

Livro:

| Campo           | Tipo   | Descrição                  |
| --------------- | ------ | -------------------------- |
| `id`            | number | Identificador do livro     |
| `titulo`        | string | Título do livro            |
| `anoPublicacao` | number | Ano de publicação do livro |
| `categoria`     | string | Categoria do livro         |
| `autor`         | string | Autor do livro             |
| `exemplares`    | number | Quantidade de exemplares   |

Leitor:

| Campo      | Tipo   | Descrição               |
| ---------- | ------ | ----------------------- |
| `id`       | number | Identificador do leitor |
| `nome`     | string | Nome do leitor          |
| `email`    | string | E-mail do leitor        |
| `telefone` | string | Telefone do leitor      |
| `endereco` | string | Endereço do leitor      |

Empréstimo:

| Campo            | Tipo   | Descrição                   |
| ---------------- | ------ | --------------------------- |
| `id`             | number | Identificador do empréstimo |
| `dataEmprestimo` | string | Data do empréstimo          |
| `dataDevolucao`  | string | Data de devolução           |
| `livro`          | string | Livro emprestado            |
| `leitor`         | string | Leitor que pegou o livro    |

Todos os campos são obrigatórios na criação. Se algum estiver ausente, a API responde `422 Unprocessable Entity`:

```json
{ "error": true, "message": "Dados Inválidos!" }
```

## Dependências

| Pacote    | Uso                         |
| --------- | --------------------------- |
| `express` | Framework HTTP e roteamento |

## Limitações conhecidas

- **Dados em memória:** não há banco de dados, então tudo é perdido ao reiniciar o servidor.
- **Sem testes automatizados:** a API foi testada manualmente no Postman.

## Feito por

- Manuella Sampaio | [@manuella](https://github.com/manussampaio)
- Giovana Barbosa | [@giovana](https://github.com/GiBarbosaa)
