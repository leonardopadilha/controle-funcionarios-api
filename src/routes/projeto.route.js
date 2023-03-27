const express = require('express');
const router = express.Router();

const projetoController = require('../controllers/projeto.controller');
const projetoValidator = require('../validators/projeto.validator')

router 
    .post('/', projetoValidator.criar(), projetoController.criar)
    .post('/varios', projetoController.criarVariosProjetos)

    .delete('/:id', projetoController.deletarProjetos)
    .delete('/deletar/:id', projetoController.deletarProjetoParaValer)

    .get('/buscar', projetoController.pesquisarProjetoPorQuery)
    .get('/', projetoController.pesquisarTodosProjetos)
    .get('/:id', projetoController.pesquisarProjetoPorId)

module.exports = router;