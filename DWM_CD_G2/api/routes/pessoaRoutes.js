'use strict';
module.exports = function (app) {
    var pessoa = require('../controllers/pessoaController');
    app.route('/pessoa')
        .post(pessoa.create_a_pessoa); //Funciona
    app.route('/pessoa/:idPessoa')
        .put(pessoa.update_a_pessoa) //Funciona
        .delete(pessoa.delete_a_pessoa); //Funciona
};