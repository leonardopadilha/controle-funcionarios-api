const departamentoService = require('../services/departamento.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors')
const { errors } = require('playwright')

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await departamentoService.criar({
            cod_gerente: req.body.cod_gerente,
            nome: req.body.nome
        });

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const encontrarDepartamentos = async function(req, res, next) {
    try {
        const response = await departamentoService.encontrarDepartamentos()
        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const encontrarDepartamentoPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await departamentoService.encontrarDepartamentoPorId(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);

    } catch (error) {
        return next(error)
    }
}

const deletarDepartamento = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await departamentoService.deletarDepartamento(req.params.id)

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
    encontrarDepartamentos: encontrarDepartamentos,
    encontrarDepartamentoPorId: encontrarDepartamentoPorId,
    deletarDepartamento: deletarDepartamento
}