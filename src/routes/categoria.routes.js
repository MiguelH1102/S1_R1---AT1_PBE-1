import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.listarCategorias);
categoriaRoutes.post("/categorias", categoriaController.criarCategoria);
categoriaRoutes.delete("/categorias/:idCategoria", categoriaController.deletarCategoria);
categoriaRoutes.put("/categorias/:idCategoria", categoriaController.atualizarCategoria);



export default categoriaRoutes;