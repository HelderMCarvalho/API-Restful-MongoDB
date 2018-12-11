'use strict';
var mongoose = require('mongoose'),
    Inscricao = mongoose.model('Inscricao'),
    Schema = mongoose.Schema,
	EventoSchema = new Schema({
		designacao: {
			type: String,
			required: 'Designacao do evento'
		},
		lotacao: {
			type: Number,
			default: 0
		},
		lotacaoAtual: {
			type: Number,
			default: 0
		},
        inscritos: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Inscricao'
            }]
        },
        Created_date: {
            type: Date,
            default: Date.now
        }
    });
module.exports = mongoose.model('Evento', EventoSchema);