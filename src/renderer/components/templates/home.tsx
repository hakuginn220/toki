import React, { SFC } from 'react'
import { Link } from 'react-router-dom'

const Home: SFC<{}> = () => (
  <>
    <Link to="/login">Go Login</Link>
  </>
)

export default Home
