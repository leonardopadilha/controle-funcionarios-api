const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');
const funcionarioValidator = require('../validators/funcionario.validator')

router
    .get('/', funcionarioController.pesquisarTodosFuncionarios)
    .get('/:id', funcionarioController.pesquisarFuncionarioPorId)
    .post('/', funcionarioValidator.criar(), funcionarioController.criar)

module.exports = router;