import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <Link to='/'>HomePage</Link>
      <Link to='/sneakerzone'>Sneaker Zone</Link>
      <Link to='/watchex'>Watchex</Link>
    </>
  )
}

export default HomePage