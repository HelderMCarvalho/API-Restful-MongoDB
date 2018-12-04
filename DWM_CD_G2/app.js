'use strict';

var express = require('express'),
    aplicacao = express(),
    porta = 5000,
    mongoose = require('mongoose'),
    Inscricao = require('./api/models/inscricoesModels'), //Modelo de dados da Inscroção
    Evento = require('./api/models/eventosModels'), //Modelo de dados do Evento
    Pessoa = require('./api/models/pessoaModels'), //Modelo de dados da Pessoa
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/InscricaoDB', { useNewUrlParser: true });

aplicacao.use(bodyParser.urlencoded({
    extended:
        true
}));
aplicacao.use(bodyParser.json());

var routesInscricoes = require('./api/routes/inscricoesRoutes'); //Importar rotas da Inscrição
var routesEventos = require('./api/routes/eventosRoutes'); //Importar rotas do Evento
var routesPessoa = require('./api/routes/pessoaRoutes'); //Importar rotas da Pessoa
routesInscricoes(aplicacao); //Registar rotas da Incrição
routesEventos(aplicacao); //Registar rotas do Evento
routesPessoa(aplicacao); //Registar rotas da Pessoa

aplicacao.listen(porta);

console.log('A executar em: ' + porta);