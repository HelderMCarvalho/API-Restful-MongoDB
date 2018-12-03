'use strict';
module.exports = function (app) {
    var insc = require('../controllers/inscricoesController');
    // rotas definidas para a API
    app.route('/inscricoes')
        .get(insc.list_all_inscricoes)
        .post(insc.create_a_inscricao);
    app.route('/inscricoes/:id')
        .get(insc.read_a_inscricao)
        .put(insc.update_a_inscricao)
        .delete(insc.delete_a_inscricao);
};