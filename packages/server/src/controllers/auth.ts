import { Router } from 'express'
import * as twitter from '../models/twitter'

const router = Router()

router.post('/twitter/authorize', (req, res, next) => {
  twitter
    .getAuthorizeUrl()
    .then(url => res.send({ url }))
    .catch(next)
})

router.post('/twitter/callback', (req, res, next) => {
  twitter
    .getAccessToken(req.body.verifier)
    .then(token => res.send({ token }))
    .catch(next)
})

export default router
