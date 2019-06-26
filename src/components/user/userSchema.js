import { gql } from 'apollo-server-express';
import { composeWithMongoose } from 'graphql-compose-mongoose/node8'; // need graphql-compose
import { schemaComposer } from 'graphql-compose';
import { printSchema } from 'graphql';

import userModel from './userModel';

const customizationOptions = {}; // left it empty for simplicity, described below
const UserTC = composeWithMongoose(userModel, customizationOptions);

schemaComposer.Query.addFields({
  current_user: UserTC.getResolver('findById')
});

const userSchemaSDL = schemaComposer.buildSchema();

console.log(printSchema(userSchemaSDL));

export { userSchemaSDL };
export default gql`
  ${printSchema(userSchemaSDL)}
`;
