const express = require('express');
const router = express.Router();

const dadosTrabalhadorController = require('../controllers/dadosTrabalhador.controller')

router
    .get('/trabalhador/:id', dadosTrabalhadorController.pesquisarTodosDadosTrabalhadorPorId)

module.exports = router;