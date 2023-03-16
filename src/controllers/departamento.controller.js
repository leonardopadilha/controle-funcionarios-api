const departamentoService = require('../services/departamento.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors')

const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }
        
        const response = await departamentoService.criar({
            nome: req.body.nome
        });

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    criar: criar
}