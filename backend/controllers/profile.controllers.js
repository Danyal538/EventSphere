import userModel from "../models/user.models.js";
import userProfileModel from "../models/userProfile.models.js";

export const createProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "Registered first your self" });
        }
        const userProfile = new userProfileModel({
            userId: req.userId,
            profilePhoto: req?.file.filename,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            website: req.body.website,
            company: req.body.company,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            pincode: req.body.pincode,
        });

        const response = await userProfile.save();
        if (response) return res.status(200).json({ success: true, message: "Profile Created successfully" });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Error in creating profile", error });
    }
}


// check if user is authenticated or registered
// profile picture upload
// storing all other details
// return response messages