import React from 'react';
import styled from 'styled-components';
import HelmetLayout from '../../layout/helmet/HelmetLayout';
import OneColLayout from '../../layout/oneCol/OneColLayout';

const Section = styled.section`
  text-align: center;
`;

function LandingPage() {
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

export default LandingPage;
