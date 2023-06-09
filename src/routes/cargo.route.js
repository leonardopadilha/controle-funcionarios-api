const express = require('express');
const router = express.Router();

const cargoController = require('../controllers/cargo.controller');
const cargoValidator = require('../validators/cargo.validator');
const verifyJWT = require('../middlewares/authorizator')

router
    .post('/', cargoValidator.criar(), cargoController.criar)
    .post('/varios', cargoController.criarVariosCargosAoMesmoTempo)
    .get('/', verifyJWT, cargoController.encontrarTodos)
    .get('/:id', cargoValidator.encontrarCargoPorId(), cargoController.encontrarCargoPorId)
    .delete('/:id', cargoValidator.deletar(), cargoController.deletar)
    .delete('/cargo/:id', cargoController.deletarParaValer)
    .put('/:id', cargoValidator.atualizar(), cargoController.atualizar)


module.exports = router