import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import DateGrid from './components/DateGrid';
import './styles/global.css';

const App = () => (
  <App.Container>
    <DateGrid />
  </App.Container>
);

App.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;

render(<App />, document.getElementById('app'));
