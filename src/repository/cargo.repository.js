const { Cargo } = require('../database/models/index');

const criar = async function(cargo) {
    const cargoCriado = await Cargo.create(cargo);
    return cargoCriado;
}

const criarVariosCargosAoMesmoTempo = async function(cargos) {
    const cargosCriados = await Cargo.bulkCreate(cargos);
    return cargosCriados;
}

const encontrarTodos = async function() {
    const cargos = await Cargo.findAll();
    return cargos;
}

const encontrarCargoPorId = async function(id) {
    const cargo = await Cargo.findByPk(id);
    return cargo;
}

const encontrarCargoPorWhere = async function(cargo) {
    const cargoEncontrado = await Cargo.findOne({ where : cargo })
    return cargoEncontrado;
}

const atualizar = async function(cargo, id) {
    await Cargo.update(cargo, {
        where: {
            id: id
        }
    })
}

const deletar = async function(id) {
    return await Cargo.destroy({
        where : {
            id: id
        }
    })
}

module.exports = {
    criar: criar,
    encontrarCargoPorWhere: encontrarCargoPorWhere,
    encontrarCargoPorId: encontrarCargoPorId,
    encontrarTodos: encontrarTodos,
    criarVariosCargosAoMesmoTempo: criarVariosCargosAoMesmoTempo,
    deletar: deletar,
    atualizar: atualizar
}