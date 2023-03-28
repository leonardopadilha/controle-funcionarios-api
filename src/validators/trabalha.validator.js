const { body, param } = require('express-validator')
const { validatorMessage } = require('../utils/errorMessage')

const criar = function() {
    return [
        body('cod_func', validatorMessage('Código do funcionário')).exists().bail().isInt(),
        body('num_proj', validatorMessage('Número do projeto')).exists().bail().isInt(),
        body('num_horas_sem', validatorMessage('Número de horas semestrais')).exists().bail().isInt(),
    ]
}

const pesquisarPorId = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    criar: criar,
    pesquisarPorId: pesquisarPorId
}