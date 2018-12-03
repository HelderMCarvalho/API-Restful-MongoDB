'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InscSchema = new Schema({
    nome: {
        type: String,
        required: 'Nome da pessoa a inscrever'
    }, estado: {
        type: String,
        enum: ['Pendente', 'Confirmado', 'Cancelado'],
        default: 'Pendente'
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Inscricao', InscSchema);