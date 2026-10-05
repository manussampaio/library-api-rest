import express from 'express';
import { livrosRouter } from "./routes/livros_router.js";
import { leitoresRouter } from "./routes/leitores_router.js";
import { emprestimosRouter } from "./routes/emprestimo_router.js";

const app = express();

app.use(express.json());

app.use("/", livrosRouter)
app.use("/", leitoresRouter)
app.use("/", emprestimosRouter)

app.listen(3333, () =>
    console.log('O servidor está rodando na porta http://localhost:3333')
);