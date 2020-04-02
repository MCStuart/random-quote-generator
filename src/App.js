import React from 'react';
import Quote from './components/Quote';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  height: 100%;
  width: 100%;
  background-color: lightblue;
  background-size: stretch;

`;

const App = () => (
  <Grid>
    <Quote />
  </Grid>
);

export default App;
