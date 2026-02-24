import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const categoriaRoutes = Router();

categoriaRoutes.get("/categorias", categoriaController.listarCategorias);

export default categoriaRoutes;