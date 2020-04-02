import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Quote = () => {

  const [hasError, setHasError] = useState(false);
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  const onClick = () => (
    console.log("Button has been clicked")
  )

  const fetchQuote = async () => {
    const res = await fetch('http://quotes.stormconsultancy.co.uk/random.json');
    const data = await res.json();
    setQuoteText(data.quote);
    setQuoteAuthor(data.author);
  };

  useEffect(() => {
    fetchQuote();
  }, [])

  return (
    <div id='quote-box'>
      <h3 id='text'>{quoteText}</h3>
      <p id='author'>{quoteAuthor}</p>
      <a id='tweet-quote' href='twitter.com/intent/tweet'>Twitter</a>
      <button id='new-quote' onClick={fetchQuote}>New Quote</button>
    </div>
  )
};

export default Quote;