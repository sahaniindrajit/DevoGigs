import Router from 'express'
import userRoute from './user.js'
import jobRouter from './job.js'

const router = Router()

router.use('/user', userRoute)
router.use('/', jobRouter)

export default router