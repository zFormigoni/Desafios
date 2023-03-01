const express = require("express");

const app = express();

app.use(express.json());

app.get("/teste", (req, res) => {
  return res.json({ message: "ok" });
});

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));
