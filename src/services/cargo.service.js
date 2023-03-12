const cargoRepository = require('../repository/cargo.repository');
const createError = require('http-errors');

const criar = async function(cargo) {
   
    const existeCargo = await cargoRepository.encontrarCargoPorWhere({ nome: cargo.nome });

    if (existeCargo) {
        return createError(409, 'Cargo já cadastrado')
    }

    const cargoCriado = await cargoRepository.criar(cargo);
    return cargoCriado;
}

const criarVariosCargosAoMesmoTempo = async function(cargos) {

    const arrayCargos = [];
    let cargosCriados = "";

    for (let i = 0; i < cargos.length; i++) {
        const existeCargo = await cargoRepository.encontrarCargoPorWhere({ nome: cargos[i].nome })

        if (existeCargo) {
            return createError(409, `Cargo ${cargos[i].nome} já cadastrado`)
        } else {
           cargosCriados = await cargoRepository.criar(cargos[i])
           arrayCargos.push(cargosCriados)
        }
    }
    return arrayCargos;
}

const encontrarCargoPorId = async function(id) {
    const cargo = await cargoRepository.encontrarCargoPorId(id);

    if (!cargo) {
        return createError(404, `O id ${id} não foi encontrado`)
    }
    return cargo;
}

const encontrarTodos = async function() {
    const cargos = await cargoRepository.encontrarTodos();

    if (cargos.length === 0) {
        return createError(400, "Cargos não cadastrados")
    }
    return cargos;
}

const atualizar = async function(cargo, id) {
    const existeCargo = await cargoRepository.encontrarCargoPorId(id);

    if (!existeCargo) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    await cargoRepository.atualizar(cargo, id);
    return await cargoRepository.encontrarCargoPorId(id);
}

const deletar = async function(id) {
    const cargo = await cargoRepository.encontrarCargoPorId(id);

    if (!cargo) {
        return createError(404, `Desculpe, o id ${id} não foi encontrado`)
    }

    await cargoRepository.deletar(id);
    return cargo;
}

module.exports = {
    criar: criar,
    encontrarCargoPorId: encontrarCargoPorId,
    encontrarTodos: encontrarTodos,
    criarVariosCargosAoMesmoTempo: criarVariosCargosAoMesmoTempo,
    deletar: deletar,
    atualizar: atualizar
}