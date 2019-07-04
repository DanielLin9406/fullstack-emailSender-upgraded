import React, { Component } from 'react';
import noop from 'lodash/noop';
import { func } from 'prop-types';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';

const Button = styled.button`
  &:hover {
    background-color: #454545 !important;
  }
`;

class Payments extends Component {
  static propTypes = {
    asyncHandleToken: func
  };

  static defaultProps = {
    asyncHandleToken: noop
  };

  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 emails credits"
        amount={500} // $5
        token={token => {
          return this.props.asyncHandleToken({ id: token.id });
        }}
        stripeKey={app.env.STRIPE_PUB_KEY}
      >
        <Button className="btn black">Add Credits</Button>
      </StripeCheckout>
    );
  }
}

export default Payments;
