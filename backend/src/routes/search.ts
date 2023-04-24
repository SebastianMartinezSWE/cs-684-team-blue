import express from "express";
import * as searchController from "../controllers/search";

const router = express.Router();

router.get("/", searchController.searchNews);

export default router;
