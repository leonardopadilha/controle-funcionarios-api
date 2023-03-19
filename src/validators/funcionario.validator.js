const { body,param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')

const criar = function() {
    return [
        body('nro_depto', validatorMessage('Número do departamento')).exists().notEmpty().bail().isInt(),
        body('nro_cargo', validatorMessage('Número do cargo')).exists().notEmpty().bail().isInt(),
        body('nome', validatorMessage('Nome')).exists().notEmpty().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().notEmpty().isEmail(),
        body('senha', validatorMessage('Senha')).exists().notEmpty().bail().isString(),
        body('sexo', validatorMessage('Sexo')).exists().notEmpty().bail().isString(),
        body('dta_nasc', validatorMessage('Data de nascimento')).exists().notEmpty().bail().isString(),
    ]
}

module.exports = {
    criar: criar
}