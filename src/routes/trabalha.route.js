const express = require('express');
const router = express.Router();

const trabalhaController = require('../controllers/trabalha.controller')
const trabalhaValidator = require('../validators/trabalha.validator')

router
    .post('/', trabalhaController.criar)
    .post("/varios", trabalhaController.criarVariosRegistros)

    .get("/buscar", trabalhaController.pesquisarDadosTrabalhadorPorQuery)
    .get("/:id", trabalhaController.pesquisarDadosTrabalhadorPorId)
    .get("/", trabalhaController.pesquisarDadosTrabalhador)

    .delete("/:id", trabalhaController.deletarRegistros)
    .delete("/deletar/:id", trabalhaController.deletarRegistrosForcado)

module.exports = router