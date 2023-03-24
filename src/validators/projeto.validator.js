const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const criar = function() {
    return [
        body('nro_depamentamento', validatorMessage('Número do departamento')).exists().bail().isString().notEmpty(),
        body('nome', validatorMessage('Nome')).exists().bail().isString().notEmpty(),
        body('descricao', validatorMessage('Descricao')).exists().bail().isString().notEmpty(),
    ]
}

module.exports = {
    criar: criar,
}