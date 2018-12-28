import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import DateGrid from './components/DateGrid';
import './styles/global.css';

const App = () => (
  <App.Container>
    <App.InnerContainer>
      <DateGrid />
    </App.InnerContainer>
  </App.Container>
);

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

App.InnerContainer = styled.div`
  width: 30%;
`;

export default App;

render(<App />, document.getElementById('app'));
