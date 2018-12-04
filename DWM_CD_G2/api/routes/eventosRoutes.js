'use strict';
module.exports = function (app) {
    var eventos = require('../controllers/eventosController');
    app.route('/eventos')
        .get(eventos.list_all_eventos) //Funciona
        .post(eventos.create_a_evento); //Funciona
    app.route('/eventos/:idEvento/listaInscricoes')
        .get(eventos.list_all_inscricoesEvento); //Funciona (Problema de Performance) (JUNTAR DADOS DA PESSOA)
    app.route('/eventos/:idEvento')
        .get(eventos.read_a_evento) //Funciona
        .post(eventos.create_a_novaInscricaoEvento) //Funciona
        .put(eventos.update_a_evento) //Funciona
        .delete(eventos.delete_a_evento); //Funciona
    app.route('/eventos/:idEvento/:idInscricao')
        .delete(eventos.delete_a_inscricao_evento); //Funciona
};