const projetoService = require('../services/projeto.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await projetoService.criar(req.body)
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const criarVariosProjetos = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty() ) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await projetoService.criarVariosProjetos(req.body)
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarTodosProjetos = async function(req, res, next) {
    try {
        const response = await projetoService.pesquisarTodosProjetos();

        if (response && response.message) {
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarProjetoPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array()})
        }

        const response = await projetoService.pesquisarProjetoPorId(req.params.id)

        if (response && response.message) {
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const pesquisarProjetoPorQuery = async function(req, res, next) {
    try {
        const response = await projetoService.pesquisarProjetoPorQuery(req.query)
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const deletarProjetos = async function(req, res, next) {
    try {
        const response = await projetoService.deletarProjeto(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    criar: criar,
    criarVariosProjetos: criarVariosProjetos,
    pesquisarTodosProjetos: pesquisarTodosProjetos,
    pesquisarProjetoPorId: pesquisarProjetoPorId,
    pesquisarProjetoPorQuery: pesquisarProjetoPorQuery,
    deletarProjetos: deletarProjetos
}
