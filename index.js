require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const handle_404Error = require('./src/middlewares/handle-404Error');
const handleError = require('./src/middlewares/handleError');

const app = express();

const funcionarioRoute = require('./src/routes/funcionario.route');
const cargoRoute = require('./src/routes/cargo.route');
const departamentoRoute = require('./src/routes/departamento.route');
const dependenteRoute = require('./src/routes/dependente.route');
const projetoRoute = require('./src/routes/projeto.route')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/funcionarios/', funcionarioRoute);
app.use('/api/cargos', cargoRoute);
app.use('/api/departamentos', departamentoRoute);
app.use('/api/dependentes', dependenteRoute);
app.use('/api/projetos', projetoRoute);

app.use(handle_404Error);
app.use(handleError)

app.listen(process.env.PORT, () => { console.log('rodando') });