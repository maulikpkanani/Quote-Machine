import React, { Component } from 'react'
import Header from './components/Header/Header'
import Theme from './components/Theme/Theme'
import Footer from './components/Footer/Footer'
import QuoteBox from './components/QuoteBox/QuoteBox'

class App extends Component {
  state = {
    isFetching: false,
    quote: {
      text: '',
      author: ''
    },
    error: false,
    theme: '#3498db'
  }

  componentDidMount () {
    this.getNewQuote()
  }

  getNewQuote = () => {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    )
      .then(res => res.json())
      .then(data => {
        const { quoteAuthor, quoteText } = data

        const quote = {
          text: quoteText,
          author: quoteAuthor || 'Unknown'
        }

        this.setState({
          quote
        })
      })
      .catch(error => console.log(error))
  }

    handleThemeColor= color=> {
          this.setState({
            theme:color
          })
    }

  render () {
    const { isFetching, quote, error, theme } = this.state

    return (
      <Theme theme={theme}>
        <div className='container'>
          <Header title='Quote Machine' />
          <div id='quote-box'>
            <QuoteBox quote={quote} onNewQuote={this.getNewQuote} 
              onChangeTheme = {this.handleThemeColor}
              activeTheme = {theme}
            />
          </div>
          <Footer />
        </div>
      </Theme>
    )
  }
}

export default App
