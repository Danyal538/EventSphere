import mongoose, { Schema } from "mongoose";

const userProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    website: {
        type: String,
    },
    company: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    }
})

const userProfileModel = mongoose.model("userProfile", userProfileSchema);
export default userProfileModel;