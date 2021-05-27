const exameLab1 = require ('../models/examesLab1');
const exameLab1Model = require('mongoose').model('exameLab1', exameLab1, "exames");
const getExamesPorPaciente = async (cpf) => {
  return await exameLab1Model.find({
    "paciente.cpf": cpf
  })
}

module.exports = {
  getExamesPorPaciente
}
