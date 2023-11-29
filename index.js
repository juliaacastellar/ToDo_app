const express = require("express")
const app = express()

//rotas
app.get('/', (req, res) => {
    res.send("olá mundinho")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})