const Schema = require('mongoose').Schema;

module.exports = new Schema(
    {
        nomeExame: String,
        tipoExame: String,
        dataExame: Date,
        observacao: String,
        preparo: String,
        medicoSolicitante: String,
        medicoSolicitanteCRM: String,
        paciente: {
        nome: String,
        idade: Number,
        cpf: String
        },
        laudador: String,
        laudadorCRM: String,
        planoSaude: String,
        laudo: String
    },
    {
        versionKey: false
    }
)
