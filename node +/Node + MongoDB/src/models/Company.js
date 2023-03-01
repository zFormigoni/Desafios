const mongoose = require("../database");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  servico: {
    type: String, // tipo de serviço
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
