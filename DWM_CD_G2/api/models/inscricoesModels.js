'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InscSchema = new Schema({
    idPessoa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pessoa'
    }, estado: {
        type: String,
        enum: ['Pendente', 'Confirmado', 'Cancelado'],
        default: 'Pendente'
    }, lugares: {
        type: Number,
        default: 1
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Inscricao', InscSchema);