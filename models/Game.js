import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Game = new Schema({
  name: String,
  genre: String,
  console: [{ type: String }],
  release: String,
  bio: String,
  image: String,
});

export default mongoose.model("games", Game);
