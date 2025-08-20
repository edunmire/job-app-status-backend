import mongoose from 'mongoose'

const Schema = mongoose.Schema

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    }
}, { timestamps: true })

export default mongoose.model('Job', JobSchema)