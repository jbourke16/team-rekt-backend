import { Router } from "express";
import * as controllers from "../controllers/reviews.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/", controllers.getReviews);
router.get("/games/:gameId", controllers.getGameReviews)
router.get("/users/:userId", controllers.getUserReviews)
router.get("/:id", controllers.getReview);
router.post("/", restrict, controllers.createReview);
router.put("/:id", restrict, controllers.updateReview);
router.delete("/:id", restrict, controllers.deleteReview);

export default router;
