import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/", controllers.getUsers)
router.get("/:id", controllers.getUser)
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

export default router;
