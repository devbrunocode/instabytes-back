import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do servidor Express
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo
app.listen(3000, () => {
    console.log("Servidor funcionando...");
});

// Rota raiz da API, retorna uma mensagem de teste
app.get("/api", (req, res) => {
    res.status(200).send("Hello World!");
});