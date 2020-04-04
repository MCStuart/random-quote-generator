import React from 'react';
import Quote from './components/Quote';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  height: 100vh;
  width: 100vw;
  background-color: lightblue;
`;

const App = () => (
  <Grid>
    <Quote />
  </Grid>
);

export default App;
