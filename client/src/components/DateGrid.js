import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';

// eslint-disable-next-line react/prefer-stateless-function
class DateGrid extends React.Component {
  render() {
    return (
      <DateGrid.Container>
        <DateGrid.HeaderText>Word Clock</DateGrid.HeaderText>
        <Clock />
      </DateGrid.Container>
    );
  }
}

DateGrid.Container = styled.div`
  padding-top: 5rem;
`;

DateGrid.HeaderText = styled.h1`
  font-size: 40px;
`;

export default DateGrid;
