import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import twitterLogo from '../assets/twitter-circle-logo.png';

const QuoteBoxDiv = styled.div`
  grid-column: 2;
  grid-row: 2;
  outline: 3px solid grey;
  padding: 1rem;
  background-color: white;
  // max-height: 300px;
  position: relative
`;

const QuoteButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

const Button = styled.button`
  right: 0;
  bottom: 0;
  border-radius: 15%;
  height: 80%
`;

const A = styled.a`
  left: 0;
`;

const Quote = () => {

  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

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
      <div id='quote-box' style={{height: '95%', position: 'relative'}}>
        <div>
          <h3 id='text'>{quoteText}</h3>
          <p id='author' style={{float: 'right'}}>-{quoteAuthor}</p>
        </div>
        <QuoteButtons id="button-box" style={{width: '100%'}}>
          <A id='tweet-quote' href={`https://twitter.com/intent/tweet?via=rtn_undef&text="${encodeURI(quoteText)}" -${quoteAuthor}&hashtags=100DaysOfCode,Quote,QuoteMachine`}><img src={twitterLogo} alt='Twitter'></img></A>
          <Button id='new-quote' onClick={fetchQuote}>New Quote</Button>
        </QuoteButtons>
      </div>
    </QuoteBoxDiv>
  )
};

export default Quote;