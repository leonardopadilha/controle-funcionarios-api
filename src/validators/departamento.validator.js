const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const criar = function() {
    return [
        body('cod_gerente', validatorMessage('Código do gerente')).exists().notEmpty().bail().isInt(),
        body('nome', validatorMessage('Nome')).exists().notEmpty().bail().isString(),
    ]
}

const encontrarDepartamentoPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const deletarDepartamento = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    criar: criar,
    encontrarDepartamentoPorId: encontrarDepartamentoPorId,
    deletarDepartamento: deletarDepartamento
}