const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const criar = function() {
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('descricao', validatorMessage('Descricao')).exists().bail().isString()
    ]
}

const atualizar = function() {
    return [
        body('descricao', validatorMessage('Descricao')).optional({ nullable: true }).bail().isString()
    ]
}

const encontrarCargoPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const deletar = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    criar: criar,
    encontrarCargoPorId: encontrarCargoPorId,
    deletar: deletar,
    atualizar: atualizar
}