import Job from '../models/jobModel.js'
import mongoose from 'mongoose'


export async function getJobs(req, res) {
    const jobs = await Job.find()
    return res.status(200).json(jobs)
}

export async function getJob(req, res) {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such job"})
    }

    const job = await Job.findById(id)

    if (!job) {
        return res.status(404).json({error: "No such job"})
    }

    res.status(200).json(job)
}

export async function createJob(req, res) {
    const job = new Job({ ...req.body })
    await job.save()
    res.status(200).json(job)
}

export async function deleteJob(req, res) {
    
}