const chai = require('chai');
const chaiHttp = require('chai-http');
const data = require('./helpers/departamentos.json')
const endpoints = require('./constants/constants');

require('dotenv').config();

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(process.env.BASE_URL);

describe('Departamentos', () => {
    context('Quando faço um GET em departamentos', () => {
        it('Então os departamentos são exibidos com sucesso', (done) => {
            request
                .get(endpoints.GET_DEPARTAMENTOS)
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.body).to.an('array').to.be.not.empty
                    expect(res.body[0].nome).to.equals(data.sucess.nome)
                    done()
                })
        })
    });
});