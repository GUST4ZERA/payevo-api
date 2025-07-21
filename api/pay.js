const express = require("express");
const axios = require("axios");
const router = express.Router();

// 🔐 CHAVE REAL (escondida no backend)
const SECRET_KEY = "sk_live_AhWTL7qLsq2nYLeejSgsSvgXRNvICbWLER1LG58CCMj2WJjy";

// 🔒 Endpoint da PayEvo
const PAYEVO_ENDPOINT = "https://api.payevo.com.br/functions/v1/transactions";

// Rota pública exposta como se fosse sua
router.post("/", async (req, res) => {
  try {
    const options = {
      method: "POST",
      url: PAYEVO_ENDPOINT,
      headers: {
        Authorization: "Basic " + Buffer.from(`${SECRET_KEY}:x`).toString("base64"),
        "Content-Type": "application/json",
      },
      data: req.body,
    };

    const response = await axios(options);
    res.json(response.data);
  } catch (err) {
    console.error("❌ Erro na PayEvo:", err.response?.data || err.message);
    res.status(500).json({ error: "Erro ao processar a transação" });
  }
});

module.exports = router;
