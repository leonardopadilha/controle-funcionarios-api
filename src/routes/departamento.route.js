const express = require('express');
const router = express.Router();

const departamentoController = require('../controllers/departamento.controller');
const departamentoValidator = require('../validators/departamento.validator')

router
    .post('/', departamentoValidator.criar(), departamentoController.criar)
    .get('/', departamentoController.encontrarDepartamentos)
    .get('/:id', departamentoValidator.encontrarDepartamentoPorId(), departamentoController.encontrarDepartamentoPorId)
    .delete('/:id', departamentoValidator.deletarDepartamento(), departamentoController.deletarDepartamento)


module.exports = router;