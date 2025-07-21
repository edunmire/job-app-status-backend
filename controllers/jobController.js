import Job from '../models/jobModel.js'
import mongoose from 'mongoose'

export async function getJob(req, res) {

}

export async function getJobs(req, res) {

}

export async function createJob(req, res) {
    const job = new Job({ ...req.body })
    await job.save()
    res.status(200).json(job)
}

export async function deleteJob(req, res) {
    
}