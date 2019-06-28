import { ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { req }) =>
  req.user ? skip : new ForbiddenError('Not authenticated as user.');
