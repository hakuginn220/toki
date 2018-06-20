export function createTweet() {
  const unique = Math.random()
    .toString(36)
    .slice(-8)
  return {
    text: unique,
    user: {
      name: unique,
      screen_name: unique,
      profile_image_url_https: 'https://placehold.jp/48x48.png'
    }
  }
}
