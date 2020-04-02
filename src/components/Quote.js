import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuoteBoxDiv = styled.div`
  grid-column: 2;
  grid-row: 2;
  outline: 5px solid grey;
  padding: 1rem;
  background-color: white;
`;

const Quote = () => {

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
    <QuoteBoxDiv>
      <div id='quote-box'>
        <h3 id='text'>{quoteText}</h3>
        <p id='author'>-{quoteAuthor}</p>
        <a id='tweet-quote' href={`https://twitter.com/intent/tweet?via=rtn_undef&text="${encodeURI(quoteText)}" -${quoteAuthor}&hashtags=100DaysOfCode,Quote,QuoteMachine`}>Twitter</a>
        <button id='new-quote' onClick={fetchQuote}>New Quote</button>
      </div>
    </QuoteBoxDiv>
  )
};

export default Quote;