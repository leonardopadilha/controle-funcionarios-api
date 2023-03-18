const funcionarioService = require('../services/funcionario.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const login = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await funcionarioService.login(req.body);

        if (response && response.message) {
            throw response
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}


const criar = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await funcionarioService.criar({
            nro_depto: req.body.nro_depto,
            nro_cargo: req.body.nro_cargo,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            sexo: req.body.sexo,
            dta_nasc: req.body.dta_nasc
        })

        res.send(response)
        
    } catch (error) {
        next(error)
    }
}

const pesquisarTodosFuncionarios = async function(req, res, next) {
    try {
        const response = await funcionarioService.pesquisarTodosFuncionarios()
        res.send(response)
    } catch (error) {
        next(error)
    }
}

const pesquisarFuncionarioPorId = async function(req, res, next) {
    try {
        const errors = validationResult(id);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await funcionarioService.pesquisarFuncionarioPorId(re.params.id);

        if (response && response.message) {
            throw response
        }

        res.send(response)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    login: login,
    criar: criar,
    pesquisarTodosFuncionarios: pesquisarTodosFuncionarios,
    pesquisarFuncionarioPorId: pesquisarFuncionarioPorId
}