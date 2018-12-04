'use strict';
var mongoose = require('mongoose'),
    Inscricao = mongoose.model('Inscricao'),
    Evento = mongoose.model('Evento'),
    Pessoa = mongoose.model('Pessoa');
exports.create_a_pessoa = function (req, res) {
    var new_pessoa = new Pessoa(req.body);
    new_pessoa.save(function (err, pessoa) {
        if (err)
            res.send(err);
        res.json(pessoa);
    });
};
exports.update_a_pessoa = function (req, res) {
    Pessoa.findOneAndUpdate({ _id: req.params.idPessoa }, req.body, { new: true }, function (err, pessoa) {
        if (err)
            res.send(err);
        res.json(pessoa);
    });
};
exports.delete_a_pessoa = function (req, res) {
    Pessoa.remove({ _id: req.params.idPessoa }, function (err, pessoa) {
        if (err)
            res.send(err);
        res.json({ message: 'Pessoa eliminada!' });
    });
};