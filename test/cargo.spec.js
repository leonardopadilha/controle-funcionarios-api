const chai = require('chai')
const chaiHttp = require('chai-http')
const data = require('./helpers/cargos.json')

require('dotenv').config();

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(process.env.BASE_URL);

describe('Enviar um POST para cargos', () => {
    context('Dado que informo os dados para cadastro de um novo cargo', () => {
        it('Então o cargo é salvo corretamente', (done) => {
            request
                .post('/cargos')
                .send(data.sucess)
                .end((err, res) => {
                    expect(res).to.status(200);
                    expect(res.body.nome).to.equals(data.sucess.nome)
                    expect(res.body.descricao).to.equals(data.sucess.descricao)
                    done();
                })
        })
    })
})

