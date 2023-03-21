const dependenteService = require('../services/dependente.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await dependenteService.criar(req.body)
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await dependenteService.pesquisarPorId(req.params.id);

        if (response && response.message) {
            return response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarTodosDependentes = async function(req, res, next) {
    try {
        const response = await dependenteService.pesquisarTodosDependentes()
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarPorQuery = async function(req, res, next) {
    try {
        const response = await dependenteService.pesquisarPorQuery(req.query)
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    criar: criar,
    pesquisarPorId: pesquisarPorId,
    pesquisarTodosDependentes: pesquisarTodosDependentes,
    pesquisarPorQuery: pesquisarPorQuery
}