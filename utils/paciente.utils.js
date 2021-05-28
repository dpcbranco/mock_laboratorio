function isValidCPF(req,res,next) {
    var sum;
    var rest;
    sum = 0;
    if (!req.query.paciente)
        return res.status(400).send({error: "Paciente não informado"});
    if (req.query.paciente == "00000000000")
      return res.status(406).send({error: "CPF Inválido"});

    for (i=1; i<=9; i++) sum = sum + parseInt(req.query.paciente.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(req.query.paciente.substring(9, 10)) )
      return res.status(406).send({error: "CPF Inválido"});

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(req.query.paciente.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(req.query.paciente.substring(10, 11) ) )
      return res.status(406).send({error: "CPF Inválido"});
    next();
}

module.exports = {
  isValidCPF
};
