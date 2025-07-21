import express from 'express'
import mongoose from 'mongoose'
import jobRoutes from './routes/jobs.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use(jobRoutes)

mongoose.connect(process.env.DB_URI).then(
    app.listen(process.env.PORT, () => console.log(`connected & listening on port ${process.env.PORT}`))
)