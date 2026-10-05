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