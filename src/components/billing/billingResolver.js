import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated } from '../../libs/auth/authResolver';
import { stripeAPIKeys } from '../../config/keys';

const stripe = Stripe(stripeAPIKeys.secretKey);

export default {
  Mutation: {
    createCredit: combineResolvers(
      isAuthenticated,
      async (parent, { tokenId }, { req, user }) => {
        await stripe.charges.create({
          amount: 500,
          currency: 'usd',
          description: '$5 for 5 credits',
          source: tokenId
        });

        user.credits += 5;
        return await user.save();
      }
    )
  }
};
