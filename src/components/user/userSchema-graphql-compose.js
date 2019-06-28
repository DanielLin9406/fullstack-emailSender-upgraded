import { composeWithMongoose } from 'graphql-compose-mongoose/node8'; // need graphql-compose
import { schemaComposer } from 'graphql-compose';

import userModel from './userModel';

const customizationOptions = {};
const UserTC = composeWithMongoose(userModel);

schemaComposer.Query.addFields({
  current_user: UserTC.getResolver('findById')
});

const userSchema = schemaComposer.buildSchema();

// Export a executable schema
export default userSchema;
