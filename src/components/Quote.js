import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuoteBoxDiv = styled.div`
  grid-column: 2;
  grid-row: 2;
  outline: 3px solid grey;
  padding: 1rem;
  background-color: white;
  max-height: 300px;
`;

const QuoteButtons = styled.div`
  
  vertical-align: bottom;
`;

const Button = styled.button`
  float: right;
`;

const A = styled.a`
  float: left;
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
      <div id='quote-box'>
        <h3 id='text'>{quoteText}</h3>
        <p id='author'>-{quoteAuthor}</p>
        <QuoteButtons>
          <A id='tweet-quote' href={`https://twitter.com/intent/tweet?via=rtn_undef&text="${encodeURI(quoteText)}" -${quoteAuthor}&hashtags=100DaysOfCode,Quote,QuoteMachine`}>Twitter</A>
          <Button id='new-quote' onClick={fetchQuote}>New Quote</Button>
        </QuoteButtons>
      </div>
    </QuoteBoxDiv>
  )
};

export default Quote;