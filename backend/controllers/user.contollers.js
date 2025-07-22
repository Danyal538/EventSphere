import userModel from "../models/user.models.js";
import validator from "validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET)
}
export const signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Minimum length for password is 8" })
        }
        const userCheck = await userModel.findOne({ email });
        if (userCheck) {
            return res.status(409).json({ success: false, message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            fullName,
            email,
            password: hashedPassword,
        });
        const response = await newUser.save();
        const token = createToken(newUser._id)
        if (response) {
            return res.status(201).json({ success: true, message: "User registered successfully", token })
        }

    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({ success: false, message: "Error in signing up user" })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" })
        }
        const token = createToken(user._id);
        res.status(200).json({ success: true, message: "Logged in successfully", token, user })
    } catch (error) {
        console.log("Error", error)
        return res.status(500).json({ success: false, message: "Error in log in" })
    }
}