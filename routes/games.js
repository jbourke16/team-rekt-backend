import { Router } from "express";
import * as controllers from "../controllers/games.js";

const router = Router();

router.get("/", controllers.getGames);
router.get("/:id", controllers.getGame);
router.put("/:id", controllers.updateGame);

export default router;
