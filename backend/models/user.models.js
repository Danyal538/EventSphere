import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
}, { timestamps: true })

const userModel = mongoose.model("user", userSchema);
export default userModel;