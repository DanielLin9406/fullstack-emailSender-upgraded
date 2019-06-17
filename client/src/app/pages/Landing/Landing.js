import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';

const Section = styled.section`
  text-align: center;
`;

class Landing extends Component {
  render() {
    return (
      <HelmetLayout>
        <OneColLayout>
          <Section>
            <h1>Emaily!</h1>
            <p>Collect feedback from your users</p>
          </Section>
        </OneColLayout>
      </HelmetLayout>
    );
  }
}

export default hot(module)(Landing);
