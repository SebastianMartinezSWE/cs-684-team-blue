import express from "express";
import * as UsersController from "../controllers/users";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

// To get authenticated user from session
router.get("/", requiresAuth, UsersController.getAuthenticatedUser);

router.post("/signup", UsersController.signUp);
router.post("/signin", UsersController.signIn);
router.post("/signout", requiresAuth, UsersController.signOut);

export default router;
