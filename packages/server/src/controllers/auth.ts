import { Router } from 'express'
import * as twitter from '../utils/twitter'

const router = Router()

router.post('/twitter/authorize', async (req, res) => {
  const url = await twitter.getAuthorizeUrl()

  res.send({ url })
})

router.post('/twitter/callback', async (req, res, next) => {
  const token = await twitter.getAccessToken(req.body.verifier)

  res.send({ token })
})

export default router
