import mongoose from "mongoose"

export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://danyalatique0:DxW9l2S2P5qzeNGX@cluster0.0hddwfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
            .then(() => console.log("DB Connected Successfully"))
    } catch (error) {
        console.log("Error in connecting with Database", error);
    }
}

