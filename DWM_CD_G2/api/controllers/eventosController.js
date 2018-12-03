'use strict';
var mongoose = require('mongoose'),
    async = require("async"),
    Inscricao = mongoose.model('Inscricao'),
    Evento = mongoose.model('Evento');
exports.list_all_eventos = function (req, res) {
    Evento.find({}, function (err, evento) {
        if (err)
            res.send(err);
        res.json(evento);
    });
};
exports.create_a_evento = function (req, res) {
    var new_evento = new Evento(req.body);
    new_evento.save(function (err, evento) {
        if (err)
            res.send(err);
        res.json(evento);
    });
};
exports.list_all_inscricoesEvento = function (req, res) {
    Evento.findById(req.params.idEvento, function (err, evento) {
        if (err) 
            res.send(err);
        let listaInscricoes = [];
        async.each(evento.inscritos, function (inscritoAtual, callback) {
            Inscricao.find({ _id: inscritoAtual._id }, function (err, inscricao) {
                listaInscricoes.push(inscricao);
                console.log(inscricao);
                callback();
            });
        }, function (err) {
            if (err) {
                console.log('Erro');
            } else {
                res.json(listaInscricoes);
            }
            });
        //DEMORA ALGUNS SEGUNDOS PARA DEVOLVER TUDO (PROBLEMA)
    });
};
exports.read_a_evento = function (req, res) {
    Evento.findById(req.params.idEvento, function (err, evento) {
        if (err)
            res.send(err);
        res.json(evento);
    });
};
exports.create_a_novaInscricaoEvento = function (req, res) {
    var new_insc = new Inscricao(req.body);
    new_insc.save(function (err, inscricao) {
        if (err)
            res.send(err);
        Evento.findOneAndUpdate({ _id: req.params.idEvento }, { $push: { inscritos: new_insc._id } }, { new: true }, function (err, evento) {
            if (err)
                res.send(err);
            res.json({ 'novaInscricao': inscricao, 'eventoAlterado': evento });
        });
    });
};
exports.update_a_evento = function (req, res) {
    Evento.findOneAndUpdate({ _id: req.params.idEvento },
        req.body, { new: true }, function (err, evento) {
            if (err)
                res.send(err);
            res.json(evento);
        });
};
exports.delete_a_evento = function (req, res) {
    Evento.remove({ _id: req.params.idEvento },
        function (err, evento) {
            if (err)
                res.send(err);
            res.json({ message: 'Evento eliminado!' });
        });
};