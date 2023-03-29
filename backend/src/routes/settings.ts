import express from "express";
import * as SettingsController from "../controllers/settings";

const router = express.Router();

router.patch("/:userId", SettingsController.updateSettings);

export default router;
