import { ITweet } from '@/components/molecules/tweet'

export function createTweet(): ITweet {
  const unique = Math.random()
    .toString(36)
    .slice(-8)
  return {
    text: unique,
    user: {
      name: unique,
      profile_image_url_https: 'https://placehold.jp/128x128.png',
      screen_name: unique
    }
  }
}
