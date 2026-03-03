 import { Router } from "express";
    import produtoController from "../controllers/produto.controller.js";
    const produtoRoutes = Router();

      produtoRoutes.get('/produtos', produtoController.listarProdutos);
      produtoRoutes.post('/produtos', produtoController.criarProduto);
      produtoRoutes.delete('/produtos/:idProduto', produtoController.deletarProduto);
      produtoRoutes.put('/produtos/:idProduto', produtoController.atualizarProduto);




    export default produtoRoutes;