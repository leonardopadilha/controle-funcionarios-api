const express = require('express');
const router = express.Router();

const cargoController = require('../controllers/cargo.controller');
const cargoValidator = require('../validators/cargo.validator');

router
    .post('/', cargoValidator.criar(), cargoController.criar)
    .post('/varios', cargoController.criarVariosCargosAoMesmoTempo)
    .get('/', cargoController.encontrarTodos)
    .get('/:id', cargoValidator.encontrarCargoPorId(), cargoController.encontrarCargoPorId)
    .delete('/:id', cargoValidator.deletar(), cargoController.deletar)
    .put('/:id', cargoValidator.atualizar(), cargoController.atualizar)


module.exports = router