export interface IUser extends ITwitterAccessToken {
  id: string
  name: string
  screen_name: string
  profile_image_url: string
}

export interface ITwitterAccessToken {
  access_token: string
  access_token_secret: string
}

export interface ITwitterMedia {
  id: number
  id_str: string
  indices: [number, number]
  media_url: string
  media_url_https: string
  url: string
  display_url: string
  expanded_url: string
  type: string
  sizes: {
    thumb: {
      w: number
      h: number
      resize: string
    }
    large: {
      w: number
      h: number
      resize: string
    }
    small: {
      w: number
      h: number
      resize: string
    }
    medium: {
      w: number
      h: number
      resize: string
    }
  }
}

export interface ITwitterStatus {
  created_at: string
  id: number
  id_str: string
  text: string
  truncated: false
  entities: {
    hashtags: []
    symbols: []
    user_mentions: []
    urls: []
    media: ITwitterMedia[]
  }
  extended_entities: {
    media: ITwitterMedia[]
  }
  source: string
  in_reply_to_status_id: null
  in_reply_to_status_id_str: null
  in_reply_to_user_id: null
  in_reply_to_user_id_str: null
  in_reply_to_screen_name: null
  geo: null
  coordinates: null
  place: null
  contributors: null
  is_quote_status: boolean
  retweet_count: number
  favorite_count: number
  favorited: boolean
  retweeted: boolean
  possibly_sensitive: boolean
  lang: string
}

export interface ITwitterUser {
  id: number
  id_str: string
  name: string
  screen_name: string
  location: string
  description: string
  url: string
  entities: {
    url: {
      urls: [
        {
          url: string
          expanded_url: string
          display_url: string
          indices: [number, number]
        }
      ]
    }
    description: {
      urls: []
    }
  }
  protected: boolean
  followers_count: number
  friends_count: number
  listed_count: number
  created_at: string
  favourites_count: number
  utc_offset: null
  time_zone: null
  geo_enabled: boolean
  verified: boolean
  statuses_count: number
  lang: string
  status: ITwitterStatus
  contributors_enabled: boolean
  is_translator: boolean
  is_translation_enabled: boolean
  profile_background_color: string
  profile_background_image_url: string
  profile_background_image_url_https: string
  profile_background_tile: boolean
  profile_image_url: string
  profile_image_url_https: string
  profile_link_color: string
  profile_sidebar_border_color: string
  profile_sidebar_fill_color: string
  profile_text_color: string
  profile_use_background_image: boolean
  has_extended_profile: boolean
  default_profile: boolean
  default_profile_image: boolean
  following: boolean
  follow_request_sent: boolean
  notifications: boolean
  translator_type: string
  suspended: boolean
  needs_phone_verification: boolean
}
