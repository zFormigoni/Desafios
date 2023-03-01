const mongoose = require("../database");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  tipo: {
    type: String, // cliente, funcionario, gestor
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  schedled: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("Clientes", UserSchema);

module.exports = User;
