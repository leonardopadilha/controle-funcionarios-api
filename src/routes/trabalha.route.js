const express = require('express');
const router = express.Router();

const trabalhaController = require('../controllers/trabalha.controller')
const trabalhaValidator = require('../validators/trabalha.validator')

router
    .post(trabalhaValidator.criar(), trabalhaController.criar)
    .post(trabalhaController.criarVariosRegistros)

    .get(trabalhaController.pesquisarDadosTrabalhadorPorQuery)
    .get(trabalhaController.pesquisarDadosTrabalhadorPorId)
    .get(trabalhaController.pesquisarDadosTrabalhador)

    .delete(trabalhaController.deletarRegistros)
    .delete(trabalhaController.deletarRegistrosForcado)

module.exports = router