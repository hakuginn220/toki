import { Router } from 'express'
import auth from './controllers/auth'

const router = Router()

router.use('/auth', auth)

router.all('*', (req, res) => {
  res.sendStatus(404)
})

export default router
