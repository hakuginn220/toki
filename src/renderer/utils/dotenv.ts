import { config } from 'dotenv'

const { parsed } = config()

export const TWITTER_CONSUMER_KEY = parsed ? parsed.TWITTER_CONSUMER_KEY : ''

export const TWITTER_CONSUMER_SECRET = parsed
  ? parsed.TWITTER_CONSUMER_SECRET
  : ''
