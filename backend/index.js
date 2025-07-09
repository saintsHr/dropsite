const express = require("express");
const cors = require("cors");

const app = express();
const PORT = ProcessingInstruction.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json([
        { id: 1, nome: "Produto 1", preco: "R$ 10,00" },
        { id: 1, nome: "Produto 2", preco: "R$ 20,00" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});