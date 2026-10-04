import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Server funcionando" });
})


app.listen(3333, () =>
    console.log('O servidor está rodando na porta http://localhost:3333')
);