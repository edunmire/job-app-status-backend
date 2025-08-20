import express from 'express'
import mongoose from 'mongoose'
import jobRoutes from './routes/jobs.js'
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(jobRoutes)

mongoose.connect(process.env.MONGO_URI).then(
    app.listen(process.env.PORT, () => console.log(`server started at http://localhost:${process.env.PORT}`))
)

