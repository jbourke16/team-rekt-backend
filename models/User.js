import mongoose from "mongoose"
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {type: String, required: true, unique: true},
        userName: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        favGames: [ { type: Schema.Types.ObjectId, ref: "games" }]
    }
)

export default mongoose.model("users", User)