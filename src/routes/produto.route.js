 import { Router } from "express";
    import produtoController from "../controllers/produto.controller.js";
    const produtoRoutes = Router();

    produtoRoutes.get('/produtos', produtoController.listar);

    export default produtoRoutes;