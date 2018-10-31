import { config } from 'dotenv'
import path from 'path'

declare var __static: string

const { parsed } = config({ path: path.join(__static, '.env') })

export const TWITTER_CONSUMER_KEY = parsed ? parsed.TWITTER_CONSUMER_KEY : ''

export const TWITTER_CONSUMER_SECRET = parsed
  ? parsed.TWITTER_CONSUMER_SECRET
  : ''
