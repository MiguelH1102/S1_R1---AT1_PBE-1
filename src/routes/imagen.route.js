import imageController from "../controllers/imagen.controller.js";
import uploadImage from "../middlewares/uploadImagen.middleware.js";
import { Router } from "express";

const imagemRoutes = Router();
imagemRoutes.post('/produtos/imagens', uploadImage, imageController.upload)

export default imagemRoutes