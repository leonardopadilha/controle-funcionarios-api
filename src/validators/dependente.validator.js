const { body, param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')

const criar = function() {
    return [
        body('cod_func', validatorMessage('Código do funcionário')).exists().notEmpty().bail().isInt(),
        body('nome', validatorMessage('Nome')).exists().notEmpty().bail().isString(),
        body('sexo', validatorMessage('Sexo')).exists().notEmpty().bail().isString(),
        body('dta_nasc', validatorMessage('Data de nascimento')).exists().notEmpty().bail().isString(),
        body('parentesco', validatorMessage('Parentesco')).exists().notEmpty().bail().isString(),
    ]
}

const pesquisarParentescoPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().notEmpty().bail().isInt(),
    ]
}
module.exports = {
    criar: criar,
    pesquisarParentescoPorId: pesquisarParentescoPorId
}