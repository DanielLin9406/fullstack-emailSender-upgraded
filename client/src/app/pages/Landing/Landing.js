import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
`;

class Landing extends Component {
  render() {
    return (
      <Section>
        <h1>Emaily!</h1>
        <p>Collect feedback from your users</p>
      </Section>
    );
  }
}

export default hot(module)(Landing);
