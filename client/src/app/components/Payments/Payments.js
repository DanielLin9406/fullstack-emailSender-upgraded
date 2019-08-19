import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import AuthContext from '../../layout/auth/AuthContext';

const Button = styled.button`
  &:hover {
    background-color: #454545 !important;
  }
`;

function Payments() {
  const { dispatch, createAsyncHandleToken } = useContext(AuthContext);
  const asyncHandleToken = createAsyncHandleToken(dispatch);

  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 emails credits"
      amount={500} // $5
      token={token => asyncHandleToken(token)}
      stripeKey={app.env.STRIPE_PUB_KEY}
    >
      <Button className="btn black">Add Credits</Button>
    </StripeCheckout>
  );
}

export default Payments;
