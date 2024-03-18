import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Fav = new Schema(
    {
        userId: {type: Schema.Types.ObjectId, ref: "users"},
        gameId: {type: Schema.Types.ObjectId, ref: "games"},
        isLiked: Boolean
    }
)

export default mongoose.model("favs", Fav)