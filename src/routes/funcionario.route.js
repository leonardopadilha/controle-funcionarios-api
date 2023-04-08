const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionario.controller');
const funcionarioValidator = require('../validators/funcionario.validator')
const verifyJWT = require('../middlewares/authorizator')

router
    .get('/', verifyJWT, funcionarioController.pesquisarTodosFuncionarios)
    .get('/:id', verifyJWT, funcionarioController.pesquisarFuncionarioPorId)
    .post('/', funcionarioValidator.criar(), funcionarioController.criar)
    
    .post('/login', funcionarioController.login)

module.exports = router;