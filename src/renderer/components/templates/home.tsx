import TwitterAuthorize from '@/containers/twitter-authorize'
import TwitterOAuth from '@/containers/twitter-oauth'
import React, { SFC } from 'react'

const Home: SFC<{}> = () => (
  <>
    <TwitterAuthorize />
    <TwitterOAuth verifier="" />
  </>
)

export default Home
