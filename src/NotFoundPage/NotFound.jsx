import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundStyle.css'
const NotFound = () => {
  return (
    <div className='notFound'>
        <p>404 NotFound <br />
        Go to <Link to='/'>Home page</Link> </p>
    </div>
  )
}

export default NotFound