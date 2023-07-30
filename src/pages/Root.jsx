import React from 'react'
import { Link } from 'react-router-dom'

const Root = () => {

    const hide = (toeNail) => {
        toeNail.classList.add('hide')
      }
      
  return (
    <div className='root'>
      <Link to='/home' className="mainLink" onClick={(e) => hide(e.target)}> SPACEBOOK </Link>
    </div>
  )
}

export default Root
