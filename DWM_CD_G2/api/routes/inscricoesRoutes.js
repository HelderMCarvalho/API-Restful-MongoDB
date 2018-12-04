'use strict';
module.exports = function (app) {
    var insc = require('../controllers/inscricoesController');
    app.route('/inscricoes/:idInscricao')
        .put(insc.update_a_inscricao); //Funciona
};