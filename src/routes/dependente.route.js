const express = require('express');
const router = express.Router();

const dependenteController = require('../controllers/dependente.controller');
const dependenteValidator = require('../validators/dependente.validator')

router
    .get('/buscar', dependenteController.pesquisarPorQuery)
    .get('/', dependenteController.pesquisarTodosDependentes)
    .get('/:id', dependenteValidator.pesquisarParentescoPorId(), dependenteController.pesquisarPorId)
    .post('/', dependenteValidator.criar(), dependenteController.criar)
    .post('/varios', dependenteController.criarVariosDependentes)

module.exports = router