const { use } = require("../../node_modules/express/lib/application");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://VitorF:IIpCkwK9qpQBCPBc@cluster0.ayftxzb.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
