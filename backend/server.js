const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let relatorios = [
  { id: 1, titulo: "Relatório de Teste", descricao: "Exemplo inicial" },
];
let solicitacoes = [
  { id: 1, descricao: "Solicitação de exemplo" },
];

// ✅ Rotas
app.get("/relatorios", (req, res) => res.json(relatorios));

app.get("/solicitacoes", (req, res) => res.json(solicitacoes));

app.post("/enviar-relatorio", (req, res) => {
  const { titulo, descricao } = req.body;
  if (!titulo || !descricao)
    return res.status(400).json({ error: "Campos obrigatórios!" });

  const novo = { id: relatorios.length + 1, titulo, descricao };
  relatorios.push(novo);
  res.json({ message: "Relatório enviado com sucesso!", data: novo });
});

app.post("/fazer-solicitacao", (req, res) => {
  const { descricao } = req.body; 
  if (!descricao || !Array.isArray(descricao) || descricao.length === 0)
    return res.status(400).json({ error: "Nenhum item enviado!" });

  const nova = { id: solicitacoes.length + 1, descricao };
  solicitacoes.push(nova);
  res.json({ message: "Solicitação registrada com sucesso!", data: nova });
});


app.listen(3000, () => console.log("✅ Backend rodando em http://localhost:3000"));
