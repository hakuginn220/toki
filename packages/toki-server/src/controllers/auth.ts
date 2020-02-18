import { Router } from 'express'
import * as twitter from '../models/twitter'

const router = Router()

router.post('/twitter', (req, res, next) => {
  twitter
    .getAuthorizeUrl()
    .then(data => res.send(data))
    .catch(next)
})

router.post('/twitter/callback', (req, res, next) => {
  twitter
    .getAccessToken(req.body.code, req.body.token, req.body.secret)
    .then(data => res.send(data))
    .catch(next)
})

export default router
