import userModel from './userModel';
import userAPI from './userAPI';
import userSchema from './userSchema-graphql-compose';
import userTypeDefs from './userTypeDefs';
import userResolver from './userResolver';

export default {
  userAPI,
  userModel,
  userResolver,
  userSchema,
  userTypeDefs
};
