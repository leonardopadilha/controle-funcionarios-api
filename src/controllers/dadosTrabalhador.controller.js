const dadosTrabalhadorService = require('../services/dadosTrabalhador.service')
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const pesquisarTodosDadosTrabalhadorPorId = async function(req, res, next) {
    try {
        const response = await dadosTrabalhadorService.pesquisarTodosDadosTrabalhadorPorId(req.params.id)

    if (response && response.message) {
        return message;
    }

    res.send(response)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    pesquisarTodosDadosTrabalhadorPorId: pesquisarTodosDadosTrabalhadorPorId
}