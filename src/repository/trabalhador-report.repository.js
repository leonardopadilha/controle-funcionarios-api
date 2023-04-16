const { sequelize } = require('../database/models/index');
const { QueryTypes } = require('sequelize');

const relatorio = async function(filtros) {

    const filtrosSql = filtrar(filtros)

    let consulta = `select * from (
                        select 
                            f.nome, 
                            f.email, 
                            f.dta_nasc, 
                            c.nome as 'cargo', 
                            c.descricao as 'descricao cargo', 
                            d.nome as 'departamento departamento',
                            p.nome as 'projeto',
                            p.descricao as 'descricao projeto',
                            t.num_horas_sem as 'horas trabalhadas'
                        from funcionarios f 
                        join departamentos d 
                        on f.nro_depto = d.id 
                        join cargos c 
                        on f.nro_cargo = c.id
                        join projetos p
                        on p.nro_departamento = d.id
                        join trabalha t 
                        on p.id = t.num_proj
                    ) as rl
                    where 1 ${filtrosSql}`;

    const dados = await sequelize.query(consulta, {
        raw: true,
        type: QueryTypes.SELECT
    });

    return dados;
}

const filtrar = function(filtros) {
    let sqlFiltros = '';

    if (filtros.nome && filtros.nome.trim()) {
        sqlFiltros += `and rl.nome like '%${filtros.nome}%'`
    }

    if (filtros.cargo && filtros.cargo.trim()) {
        sqlFiltros += `and rl.cargo like '%${filtros.cargo}%'`
    }
    
    return sqlFiltros;
}

module.exports = {
    relatorio: relatorio
}