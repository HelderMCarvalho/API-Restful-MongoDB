'use strict';

var express = require('express'),
    aplicacao = express(),
    porta = 5000,
    mongoose = require('mongoose'),
    Inscricao = require('./api/models/inscricoesModels'), //instanciar o modelo de dados definido
    Evento = require('./api/models/eventosModels'), //instanciar o modelo de dados definido
    bodyParser = require('body-parser'); // configuracao do modelo em mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/InscricaoDB', { useNewUrlParser: true });


aplicacao.use(bodyParser.urlencoded({
    extended:
        true
}));
aplicacao.use(bodyParser.json());

var routesInscricoes = require('./api/routes/inscricoesRoutes'); //importar rotas
var routesEventos = require('./api/routes/eventosRoutes'); //importar rotas
routesInscricoes(aplicacao); //registar as rotas
routesEventos(aplicacao); //registar as rotas

aplicacao.listen(porta);

console.log('A executar em: ' + porta);