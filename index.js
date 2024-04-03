import express from "express";
import { } from "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import leadRoute from "./routes/leadRoute.js";

const app = express();
const corsOptions = { origin: 'http://localhost:5173', credentials: true };
app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/lead', leadRoute);

app.use((error, req, res, next) => {
    const err = {
        message: false,
        status: error.status || 500,
        message: error.message || "Something Went Wrong.",
        stack: error.stack
    }
    return res.status(error.status || 500).send(err)
});

app.get('/', (req, res) => {
    return res.status(200).json({ message: "I am response from server" })
})

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Connected to Database. Our server running on Port:  ${PORT}`)))
    .catch((error) => console.log(error.message))   