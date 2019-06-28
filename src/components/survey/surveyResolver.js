import { isAuthenticated } from '../../libs/auth/authorization';
import { combineResolvers } from 'graphql-resolvers';
import Survey from './surveyModel';

export default {
  Query: {
    surveys: combineResolvers(isAuthenticated, async (parent, arg, { req }) => {
      const surveys = await Survey.find({
        _user: req.user._id
      }).select({
        recipients: false
      });
      return surveys;
    })
  }
};
