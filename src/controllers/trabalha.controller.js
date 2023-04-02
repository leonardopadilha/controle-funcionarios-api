const trabalhaService = require('../services/trabalha.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await trabalhaService.criar(req.body)
        res.send(response)

    } catch (error) {
        return next(error)
    }
}

const criarVariosRegistros = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await trabalhaService.criarVariosRegistros(req.body)
        res.send(response)

    } catch (error) {
        return next(error)
    }
}

const pesquisarDadosTrabalhadorPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array()})
        }

        const response = await trabalhaService.pesquisarDadosTrabalhadorPorId(req.params.id)

        if (response && response.message) {
            return response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarDadosTrabalhador = async function(req, res, next) {
    try {
        const response = await trabalhaService.pesquisarDadosTrabalhador()

        if (response && response.message) {
            throw response;
        }

        res.send(response)

    } catch (error) {
        return next(error)   
    }
}

const pesquisarDadosTrabalhadorPorQuery = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await trabalhaService.pesquisarDadosTrabalhadorPorQuery(req.query)

        if (response && response.message) {
            return response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const deletarRegistros = async function(req, res, next) {
    try {
        const response = await trabalhaService.deletarRegistros(req.params.id)

        if (response && response.message) {
            return response;
        }

        res.send(message)
    } catch (error) {
        return next(error)
    }
}

const deletarRegistrosForcado = async function(req, res, next) {
    try {
        const response = await trabalhaService.deletarRegistrosForcado(req.params.id)

        if (response && response.message) {
            return response;
        }

        res.send(message)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    criar: criar,
    criarVariosRegistros: criarVariosRegistros,
    pesquisarDadosTrabalhadorPorId: pesquisarDadosTrabalhadorPorId,
    pesquisarDadosTrabalhador: pesquisarDadosTrabalhador,
    pesquisarDadosTrabalhadorPorQuery: pesquisarDadosTrabalhadorPorQuery,
    deletarRegistros: deletarRegistros,
    deletarRegistrosForcado: deletarRegistrosForcado
}