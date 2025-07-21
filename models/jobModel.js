import mongoose from 'mongoose'

const Schema = mongoose.Schema

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Job', JobSchema)