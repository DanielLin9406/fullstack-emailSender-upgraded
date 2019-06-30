import { ForbiddenError } from 'apollo-server';
import { skip } from 'graphql-resolvers';

export const isEnoughCredit = (parent, args, { req }) => {
  console.log(req.user);
  return Number(req.user.credits > 0)
    ? skip
    : new ForbiddenError('Not enough credits');
};
