import express from 'express'
import { getJobs, getJob, createJob, deleteJob } from '../controllers/jobController.js'

const router = express.Router()

router.get('/', getJobs)
router.get('/:id', getJob)
router.post('/', createJob)
router.delete('/', deleteJob)

export default router