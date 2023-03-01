const express = require("express");
const User = require("../models/User");
const Company = require("../models/Company");
const router = express.Router();

//! user
router.post("/registerUser", async (req, res) => {
  const { schedule } = req.body;
  try {
    if (await User.findOne({ schedule })) {
      return res.status(400).send({ error: "horario ja agendado" });
    }

    const user = await User.create(req.body);

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: err });
  }
});

router.get("/find/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.find({ name });
  if (!user) {
    return res.status(400).send({ error: "usuario nao encontrado" });
  }

  return res.send(JSON.stringify(user));
});

router.get("/users", async (req, res) => {
  /*const user = {};
  User.length;
*/
  const users = await await User.find();

  return res.send(JSON.stringify({ users }));
});

router.put("/change/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ name });
  if (!user) {
    return res.status(400).send({ error: "usuario nao encontrado" });
  } else {
    const userNovo = await User.findOne({ name }).updateOne(req.body);

    return res.send({ userNovo: { name }, message: "usuario alterado" });
  }
});

router.delete("/removeUser/:name", async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ name });
  if (!user) {
    return res.status(400).send({ error: "usuario nao encontrado" });
  } else {
    try {
      const user = await User.deleteOne(req.params);

      return res.send({ user: { name }, message: "removido" });
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }
});

//! Company
router.post("/registerCompany", async (req, res) => {
  try {
    const company = await Company.create(req.body);

    return res.send({ company });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});
module.exports = (app) => app.use("/auth", router);
