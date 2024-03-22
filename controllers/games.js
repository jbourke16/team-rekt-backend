import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (game) {
      return res.json(game);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateGame = async (req, res) => {
  const { id } = req.params;
  const review = await Game.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(review);
};