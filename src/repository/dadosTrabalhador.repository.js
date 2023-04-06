const db = require('../database/models')
const Trabalhador = db.Trabalhador;
const Dependentes = db.Dependentes;
const Cargo = db.Cargo;
const Departamento = db.Departamento;


const pesquisarTodosDadosTrabalhadorPorId = async function(id) {
    const dadosTrabalhador = await Trabalha.findAll({
        where: {
            id: id
        },
        include: [
            {
                model: Dependentes,
                as: 'dependentes'
            },
            {
                model: Cargo,
                as: 'cargos'
            },
            {
                model: Departamento,
                as: 'departamentos'
            }
        ]
    });
    return dadosTrabalhador;
}

module.exports = {
    pesquisarTodosDadosTrabalhadorPorId: pesquisarTodosDadosTrabalhadorPorId
}

