import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';

const Button = styled.button`
  &:hover{
    background-color:#454545!important;
  }
`

class Payments extends Component{
  render(){
    return (
      <StripeCheckout 
        name="Emaily"
        description="$5 for 5 emails credits"
        amount={500} // $5
        token={token => this.props.asyncHandleToken(token)}
        stripeKey={app.env.STRIPE_PUB_KEY}
      >
        <Button className="btn black">
          Add Credits
        </Button>
      </StripeCheckout>
    )
  }
}

export default Payments;