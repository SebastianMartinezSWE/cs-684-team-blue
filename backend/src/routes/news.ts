import express from "express";
import * as NewsController from "../controllers/news";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router.get("/default", NewsController.defaultNews);

router.get("/:username", requiresAuth, NewsController.userNews);

export default router;
