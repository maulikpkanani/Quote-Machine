import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Quote from '../../Quote'
import './QuoteBox.css'
import ThemeList from '../ThemeList/ThemeList'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import PropTypes from 'prop-types'

const QuoteBox = ({
  quote,
  onNewQuote,
  isFetching,
  isError,
  onChangeTheme,
  activeTheme
}) => (
  <Fragment>
    <div className='quote-content'>
      {isFetching && <Spinner />}
      {isError && <ErrorMessage />}
      <Quote quote={quote} />
    </div>

    <ThemeList onChangeTheme={onChangeTheme} activeTheme={activeTheme} />

    <div className='quote-controls'>
      <a
        href={`https://twitter.com/intent/tweet?text=${quote.text}- ${
          quote.author
        }`}
        rel='no opener no referrer'
        target='_blank'
        id='tweet-quote'
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} /> Tweet
      </a>
      <button
        type='button'
        id='new-quote'
        onClick={onNewQuote}
        disabled={isFetching}
      >
        <FontAwesomeIcon icon={['fas', 'arrow-right']} /> Quote
      </button>
    </div>
  </Fragment>
)

QuoteBox.propTypes = {
  quote: PropTypes.object,
  onNewQuote: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onChangeTheme: PropTypes.func,
  activeTheme: PropTypes.string
}

export default QuoteBox
