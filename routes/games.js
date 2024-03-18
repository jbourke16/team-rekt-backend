import { Router } from "express";
import * as controllers from "../controllers/games.js";

const router = Router();

router.get("/" , controllers.getGames);
router.get("/:id", controllers.getGame);

export default router;