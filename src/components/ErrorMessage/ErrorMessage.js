import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ErrorMessage.css'

const ErrorMessage = () => (
  <div className='error-box'>
    <span />
    <FontAwesomeIcon id='#icon' icon={['fas', 'ExclamationCircle']} />
    <span>
      Something went wrong while fetching the quote!! Please try again.
    </span>
  </div>
)

export default ErrorMessage
