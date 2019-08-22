import { stripeAPIKeys } from '../../config/keys';
import Stripe from 'stripe';
import requireLogin from '../../libs/login/requireLogin';
import billingRouter from '../../libs/router/enrichRouter';

const stripe = Stripe(stripeAPIKeys.secretKey);

billingRouter.post('/api/stripe', requireLogin, async (req, res) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: 'usd',
    description: '$5 for 5 credits',
    source: req.body.id
  });

  // req.user is our user model
  req.user.credits += 5;
  const user = await req.user.save();

  res.send(user);
});

export default billingRouter;
