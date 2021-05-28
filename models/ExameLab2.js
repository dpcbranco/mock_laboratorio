const Schema = require('mongoose').Schema;

module.exports = new Schema({
    exame: {
        nome: String,
        categoria: String,
        preparo: String
    },
    data: Date,
    medicoSolicitante: {
        nome: String,
        crm: Number,
        ufcrm: String,
        especialidade: String
    },
    medicoLaudador: {
        nome: String,
        crm: Number,
        ufcrm: String
    },
    laudo: {
        formatoArquivo: String,
        gridFS: String
    },
    paciente: {
        nome: String,
        idade: Number,
        cpf: String,
        convenio: String,
        nrconvenio: String,
        vencimentoconvenio: String,
        profissao: String
    }
}, {
    versionKey: false
})