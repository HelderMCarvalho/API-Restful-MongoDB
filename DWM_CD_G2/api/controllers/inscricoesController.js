'use strict';
var mongoose = require('mongoose'),
    Inscricao = mongoose.model('Inscricao'),
    Evento = mongoose.model('Evento'),
    Pessoa = mongoose.model('Pessoa');
exports.update_a_inscricao = function (req, res) {
    Inscricao.findOneAndUpdate({ _id: req.params.idInscricao },
        req.body, { new: true }, function (err, inscricao) {
            if (err)
                res.send(err);
            res.json(inscricao);
        });
};