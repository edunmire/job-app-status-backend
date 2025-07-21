import express from 'express'
import { getJob, getJobs, createJob, deleteJob } from '../controllers/jobController.js'

const router = express.Router()

router.get('/:id', getJob)
router.get('/', getJobs)
router.post('/', createJob)
router.delete('/', deleteJob)

export default router