const chai = require('chai');
const chaiHttp = require('chai-http');

require('dotenv').config();

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(process.env.BASE_URL);

describe('Página não encontrada', () => {
    context('Quando pesquiso por uma rota inexistente', () => {
        it('Então o retorno é um 404 - Não encontado', (done) => {
            request
                .get('/pagina')
                .end((err, res) => {
                    expect(res).to.have.status(404)
                    expect(res.body).to.contains("Não encontrado")
                    done()
                })
        })
    });
});