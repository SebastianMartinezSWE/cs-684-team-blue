import express from "express";
import * as CategoryController from "../controllers/category";

const router = express.Router();

router.get("/:category", CategoryController.categoryNews);

export default router;
