'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var InscSchema = new Schema({
    nome: {
        type: String,
        required: 'Nome da pessoa'
    }, Created_date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Pessoa', InscSchema);