import express from "express"
import { createProducts, deleteProduct, getProducts, updateProducts } from "../controllers/product.controller.js"

const router = express.Router()

router.post("/", createProducts)

router.delete("/:id", deleteProduct)

router.get("/", getProducts)

router.put("/:id", updateProducts)

export default router;