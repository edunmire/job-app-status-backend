import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())


mongoose.connect(process.env.DB_URI).then(
    app.listen(process.env.PORT, () => console.log(`connected & listening on port ${process.env.PORT}`))
)