const { Departamento } = require('../database/models/index');

const criar = async function(departamento) {
    const departamentoCriado = await Departamento.create(departamento);
    return departamentoCriado;
}

module.exports = {
    criar: criar
}