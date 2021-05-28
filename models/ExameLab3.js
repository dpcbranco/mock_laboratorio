const Schema = require('mongoose').Schema;

module.exports = new Schema({
    exame: Number,
    paciente: String,
    medicoSolicitante: String,
    medicoLaudador: String,
    laudo: String,
    dataExame: Date
}, {
    versionKey: false
})