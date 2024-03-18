import {Router} from 'express'
import gamesRoutes from './games.js'
import usersRoutes from './users.js'
import reviewsRoutes from './reviews.js'

const router = Router();

router.get("/", (req,res)=> res.send("This is the api root!"))

router.use("/games", gamesRoutes);
router.use("/users", usersRoutes);
router.use("/reviews", reviewsRoutes);


export default router