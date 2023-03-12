const cargoService = require('../services/cargo.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors')

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await cargoService.criar({
            nome: req.body.nome,
            descricao: req.body.descricao
        });

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const criarVariosCargosAoMesmoTempo = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await cargoService.criarVariosCargosAoMesmoTempo(req.body);

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const encontrarCargoPorId = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(404, { errors: errors.array() });
        }

        const response = await cargoService.encontrarCargoPorId(req.params.id);

        if (response && response.message) {
            throw response;
        }
        
        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const encontrarTodos = async function(req, res, next) {
    try {
        const response = await cargoService.encontrarTodos(req.params.id)

        if (response && response.message) {
            throw response;
        }
        res.send(response)

    } catch (error) {
        return next(error)
    }
}

const atualizar = async function(req, res, next) {
    try {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await cargoService.atualizar({
            descricao: req.body.descricao
        }, req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

const deletar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await cargoService.deletar(req.params.id);
        
        if (response && response.message) {
            throw response;
        }
        res.send(response)
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    criar: criar,
    encontrarCargoPorId: encontrarCargoPorId,
    encontrarTodos: encontrarTodos,
    criarVariosCargosAoMesmoTempo: criarVariosCargosAoMesmoTempo,
    deletar: deletar,
    atualizar: atualizar
}