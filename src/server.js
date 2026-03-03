import express from "express";
import produtoRoutes from "./routes/produto.route.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import imagemRoutes from "./routes/imagem.routes.js";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use('/', imagemRoutes);
app.use('/', produtoRoutes);
app.use('/',categoriaRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
})