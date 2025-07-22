import express from "express"
import userRouter from "./routes/user.router.js";
import { dbConnect } from "./db/index.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 4000

dbConnect();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API Working")
});

app.use("/api/user", userRouter);

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
});

