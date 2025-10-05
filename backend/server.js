const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas fake
app.get("/relatorios", (req, res) => {
  res.json([{ id: 1, titulo: "Relatório de Teste" }]);
});

app.get("/solicitacoes", (req, res) => {
  res.json([{ id: 1, descricao: "Solicitação de exemplo" }]);
});

app.post("/enviar-relatorio", (req, res) => {
  res.json({ message: "Relatório enviado com sucesso!" });
});

app.post("/fazer-solicitacao", (req, res) => {
  res.json({ message: "Solicitação registrada com sucesso!" });
});

app.listen(3000, () => console.log("✅ Backend rodando em http://localhost:3000"));
