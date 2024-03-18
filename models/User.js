import mongoose from "mongoose"
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: {type: String, required: true, unique: true},
        userName: { type: String, required: true, unique: true},
        password: { type: String, required: true}
    }
)

export default mongoose.model("users", User)