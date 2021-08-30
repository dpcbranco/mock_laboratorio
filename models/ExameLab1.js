const Schema = require('mongoose').Schema;
const ObjectId = require('mongoose').ObjectId;


module.exports = new Schema(
    {
        _id: ObjectId,
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
