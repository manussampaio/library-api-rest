const emprestimos = [];

//get
const buscarEmprestimos = (req, res) => {
    console.log('Buscando Emprestimos...')

    res.json(emprestimos)
}

//get com id 
const buscarEmprestimosPorID = (req, res) => {

    const { id } = req.params
    const idNumber = parseInt(id)
    const emprestimo = emprestimos.find((emprestimo) => emprestimo.id === idNumber)

    console.log('Buscando Emprestimos por ID...')
    if (emprestimo) {
        res.json(emprestimo)
    } else {
        res.status(404).send('Esse emprestimo não existe!')
    }
}

//post
const adicionarEmprestimo = (req, res) => {
    const { id, dataEmprestimo, dataDevolucao, livro, leitor } = req.body

    if (!id || !dataEmprestimo || !dataDevolucao || !livro || !leitor) {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const emprestimo = {
        id, dataEmprestimo, dataDevolucao, livro, leitor, devolvido: false
    }

    emprestimos.push(emprestimo)

    if (emprestimo) {
        res.status(201).json({
            error: false,
            message: "Emprestimo Adicionado!",
            emprestimo: emprestimo
        })
    } else {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    }

}
