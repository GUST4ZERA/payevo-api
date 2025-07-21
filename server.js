const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const payRoute = require("./api/pay");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/pay", payRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🔥 Servidor rodando na porta", PORT);
});
