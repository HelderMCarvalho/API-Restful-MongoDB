'use strict';
module.exports = function (app) {
    var eventos = require('../controllers/eventosController');
    // rotas definidas para a API
    app.route('/eventos')
        .get(eventos.list_all_eventos) //Funciona
        .post(eventos.create_a_evento); //Funciona
    app.route('/eventos/:idEvento/listaInscricoes')
        .get(eventos.list_all_inscricoesEvento); //Em desenvolvimento
    app.route('/eventos/:idEvento')
        .post(eventos.create_a_novaInscricaoEvento) //Funciona
        .delete(eventos.delete_a_evento); //Funciona
};