const { use } = require("express/lib/application");
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://VitorF:IIpCkwK9qpQBCPBc@cluster0.ayftxzb.mongodb.net/?retryWrites=true&w=majority"
);
const { Schema } = mongoose;

/*tipo == cliente, funcionário ou gestor*/
const user = mongoose.model(
  "user",
  new Schema({
    name: String,
    tipo: String,
    service: { type: Schema.Types.ObjectId, ref: "service" },
    company: { type: Schema.Types.ObjectId, ref: "company" },
  })
);

const service = mongoose.model(
  "service",
  new Schema({
    service: String,
    schedule: { type: Schema.Types.ObjectId, ref: "schedule" },
    user: { type: Schema.Types.ObjectId, ref: "user" },
  })
);

const schedule = mongoose.model(
  "schedule",
  new Schema({ data: String, hora: String })
);

const company = mongoose.model(
  "company",
  new Schema({
    name: String,
    user: { type: Schema.Types.ObjectId, ref: "user" },
    service: { type: Schema.Types.ObjectId, ref: "service" },
  })
);

function addUser(nome, tipo, service) {
  const usuario = new user({
    name: nome,
    tipo: tipo,
    service: service,
    //company: company,
  });
  usuario.save().then(() => console.log("Salvo"));
}

function addService(ser, sch) {
  const service1 = new service({
    service: ser,
    schedule: sch,
  });

  service1.save().then(() => console.log("Salvo"));
}

function addSchedule(data, hora) {
  const agendamento = new schedule({ data: data, hora: hora });

  return agendamento;
}

function addCompany(nome) {
  const empresa = new company({
    name: nome,
  });
  empresa.save().then(() => console.log("Salvo"));
}

addService("teste", addSchedule("10/10/2010", "13:00"));
addUser(
  "vitor",
  "teste",
  addService("teste", addSchedule("10/10/2010", "13:00"))
);

//addSchedule("10/10/2010", "13:00");
//addCompany("empresa1");

//const user1 = new user({ name: "Vitor Formigoni" });
//user1.save().then(() => console.log("Salvo"));
