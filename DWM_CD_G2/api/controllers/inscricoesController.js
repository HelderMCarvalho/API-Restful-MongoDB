'use strict';
var mongoose = require('mongoose'),
    Inscricao = mongoose.model('Inscricao'),
    Evento = mongoose.model('Evento');
exports.list_all_inscricoes = function (req, res) {
    Inscricao.find({}, function (err, inscricao) {
        if (err)
            res.send(err);
        res.json(inscricao);
    });
};
exports.create_a_inscricao = function (req, res) {
    var new_insc = new Inscricao(req.body);
    new_insc.save(function (err, inscricao) {
        if (err)
            res.send(err);
        res.json(inscricao);
    });
};
exports.read_a_inscricao = function (req, res) {
    Inscricao.findById(req.params.idInscricao, function (err, inscricao) {
        if (err)
            res.send(err);
        res.json(inscricao);
    });
};
exports.update_a_inscricao = function (req, res) {
    Inscricao.findOneAndUpdate({ _id: req.params.idInscricao },
        req.body, { new: true }, function (err, inscricao) {
            if (err)
                res.send(err);
            res.json(inscricao);
        });
};
exports.delete_a_inscricao = function (req, res) {
    Inscricao.remove({ _id: req.params.idInscricao },
        function (err, inscricao) {
            if (err)
                res.send(err);
            res.json({ message: 'inscricao eliminada' });
        });
};