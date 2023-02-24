import express from "express";
import * as UsersController from "../controllers/users";

const router = express.Router();

// To get authenticated user from session (Currently not needed)
// router.get("/", UsersController.getAuthenticatedUser);

router.post("/signup", UsersController.signUp);
router.post("/signin", UsersController.signIn);
router.post("/signout", UsersController.signOut);

export default router;
