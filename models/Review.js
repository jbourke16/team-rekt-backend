import mongoose from "mongoose"
const Schema = mongoose.Schema;

const Review = new Schema(
    {
        userId: {type: Schema.Types.ObjectId, ref: "users"},
        gameId: {type: Schema.Types.ObjectId, ref: "games"},
        rating: Number,
        comment: String
    }
)

export default mongoose.model("reviews", Review)