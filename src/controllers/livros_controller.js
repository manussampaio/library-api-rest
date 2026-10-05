const livros = [];

//get
const buscarLivro = (req, res) => {
    console.log('Buscando Livros...')

    res.json(livros)
}

//get com id 
const buscarLivroPorID = (req, res) => {

    const { id } = req.params
    const idNumber = parseInt(id)
    const livro = livros.find((livro) => livro.id === idNumber)

    console.log('Buscando Livros por ID...')
    if (livro) {
        res.json(livro)
    } else {
        res.status(404).send('Esse livro não existe!')
    }
}


//post
const adicionarLivro = (req, res) => {
    const { id, titulo, anoPublicacao, categoria, autor, exemplares } = req.body

    if (!id || !titulo || !anoPublicacao || !categoria || !autor || !exemplares) {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
        return
    }

    const livro = {
        id, titulo, anoPublicacao, categoria, autor, exemplares
    }

    livros.push(livro)

    if (livro) {
        res.status(201).json({
            error: false,
            message: "Livro Adicinado!",
            livro: livro
        })
    } else {
        res.status(422).json({
            error: true,
            message: "Dados Inválidos!"
        })
    }

}

//put
const atualizarLivro = (req, res) => {

    const { id } = req.params
    const idNumber = parseInt(id)
    const index = livros.findIndex((livro) => livro.id === idNumber)


    if (index === -1) {
        return res.status(404).json({
            error: true,
            message: "Livro não encontrado!"
        })
    }

    const livroAtualizado = {
        id: id,
        ...req.body
    }

    livros[index] = livroAtualizado

    console.log('Livro atualizado com sucesso!')
    if (livroAtualizado) {
        res.json({
            error: false,
            message: "Livro atualizado com sucesso!",
            livro: livroAtualizado
        })
    } else {
        res.json({
            error: true,
            message: "Alteração NÃO realizada!"
        })
    }
}

//delete
const deletarLivro = (req, res) => {
    const { id } = req.params
    const idNumber = parseInt(id)
    const index = livros.findIndex((livro) => livro.id === idNumber)

    if (index !== -1) {
        livros.splice(index, 1)
        res.json({
            error: false,
            message: "Livro deletado!"
        })
    } else {
        res.json({
            error: true,
            message: "Livro NÃO deletado!"
        })
    }
}

export { buscarLivro, buscarLivroPorID, adicionarLivro, atualizarLivro, deletarLivro, livros }