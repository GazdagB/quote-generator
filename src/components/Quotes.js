import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Quotes = ({content,author}) => {
  return (
    <div className='quote-container'>
    <div className="quote__icon">
        <FontAwesomeIcon icon={faQuoteLeft} />
    </div>
    <p className='quote__content'>"{content}"</p>
    <div className='quote__divider'></div>
    <p className="quote__author">{author}</p>
    </div>
  )
}

export default Quotes