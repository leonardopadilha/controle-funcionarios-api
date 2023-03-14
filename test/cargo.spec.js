const chai = require('chai')
const chaiHttp = require('chai-http')
const data = require('./helpers/cargos.json')
const endpoints = require('./constants/constants')

require('dotenv').config();

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(process.env.BASE_URL);

describe('Cargos', () => {
    let id;

    context('Dado que informo os dados para cadastro de um novo cargo', () => {
        it('Então o cargo é salvo corretamente', (done) => {
            request
                .post(endpoints.POST_CARGOS)
                .send(data.sucess)
                .end((err, res) => {
                    expect(res).to.status(200);
                    id = res.body.id;

                    expect(res.body.nome).to.equals(data.sucess.nome)
                    expect(res.body.descricao).to.equals(data.sucess.descricao)
                    done();
                })
        })
    });

    context('Dado que informo apenas a descricão', () => {
        it('Então o cargo não deve ser cadastrado sem o nome', (done) => {
            request
                .post(endpoints.POST_CARGOS)
                .send(data.nome_vazio)
                .end((err, res) => {
                    expect(res).status(422)
                    expect(res.body).to.not.have.property('id')
                    expect(res.body).to.be.an('array').to.contains("A propriedade Nome não existe")
                    done();
                })
        })
    });

    context('Dado que informo apenas o nome', () => {
        it('Então o cargo não deve ser cadastrado sem a descrição', (done) => {
            request
                .post(endpoints.POST_CARGOS)
                .send(data.descricao_vazia)
                .end((err, res) => {
                    expect(res).status(422)
                    expect(res.body).to.not.have.property('id')
                    expect(res.body).to.be.an('array').to.contains("A propriedade Descricao não existe")
                    done();
                })
        });
    });

    context('Dado que informo o id de um cargo para exclusão', () => {
        it('Então o cargo deve ser excluído com sucesso', (done) => {
            request
                .delete(endpoints.DELETE_CARGO + id)
                .end((err, res) => {
                    expect(res).status(200)
                    expect(res.body.id).to.equals(id)
                    done();
                })
        });
    });
});

