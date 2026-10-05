import express from 'express';
import { livrosRouter } from "./routes/livros_routes.js";
import { leitoresRouter } from "./routes/leitores_routes.js";
import { emprestimosRouter } from "./routes/emprestimos_routes.js";

const app = express();

app.use(express.json());

app.use("/", livrosRouter)
app.use("/", leitoresRouter)
app.use("/", emprestimosRouter)

app.listen(3333, () =>
    console.log('O servidor está rodando na porta http://localhost:3333')
);