import React, { Fragment } from 'react'
import Quote from '../../Quote'
import './QuoteBox.css'
import ThemeList from '../ThemeList/ThemeList';
import PropTypes from 'prop-types'

const QuoteBox = ({ quote, onNewQuote, onChangeTheme, activeTheme }) => (
  <Fragment>
    <div className='quote-content'>
      <Quote quote={quote} />
    </div>

    <ThemeList onChangeTheme = {onChangeTheme}
    activeTheme={activeTheme}/>
    
    <div className='quote-controls'>
      <a
        href={`https://twitter.com/intent/tweet?text=${quote.text}- ${
          quote.author
        }`}
        rel='no opener no referrer'
        target='_blank'
        id='tweet-quote'
      >
        <i className='fab fa-twitter' />
        Tweet
      </a>
      <button type='button' id='new-quote' onClick={onNewQuote}>
        <i className='fab fa-telegram-plane' />
        New Quote
      </button>
    </div>
  </Fragment>
)

QuoteBox.propTypes = {
  quote: PropTypes.object
}

export default QuoteBox

QuoteBox.propTypes ={
  quote:PropTypes.object,
  onNewQuote: PropTypes.func.isRequired,
}