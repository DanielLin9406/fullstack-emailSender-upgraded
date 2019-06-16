import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import BaseLayout from '../../layout/base/BaseLayout';

const Section = styled.section`
  text-align: center;
`;

class Landing extends Component {
  render() {
    return (
      <BaseLayout>
        <Section>
          <h1>Emaily!</h1>
          <p>Collect feedback from your users</p>
        </Section>
      </BaseLayout>
    );
  }
}

export default hot(module)(Landing);
