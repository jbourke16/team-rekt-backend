import db from "../db/connection.js";
import chalk from "chalk";
import gamesData from "./games.json" assert { type: "json" };
import Game from "../models/Game.js";

const insertData = async () => {
  await db.dropDatabase();
  await Game.create(gamesData);
  console.log(chalk.magentaBright("Games data added! NOICE"));
  await db.close();
};

insertData();
