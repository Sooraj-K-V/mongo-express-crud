import express from "express";
import Product from "../models/product.model.js";
const router = express.Router();
import {getProducts, getProduct, postProduct, putProduct, deleteProduct} from "../controllers/product.controller.js"

router.get("/", getProducts)

router.get("/:id", getProduct);

router.post("/", postProduct);


router.put("/:id", putProduct);

router.delete("/:id", deleteProduct);

export default router