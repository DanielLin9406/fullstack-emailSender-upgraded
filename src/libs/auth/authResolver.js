import { AuthenticationError, ForbiddenError } from 'apollo-server';
import { combineResolvers, skip } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { req }) =>
  req.user ? skip : new AuthenticationError('Not authenticated as user.');
