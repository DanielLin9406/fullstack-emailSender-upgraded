import { makeExecutableSchema } from 'graphql-tools';
import { printSchema } from 'graphql';

import { userSchemaSDL } from '../components/user/userSchema';
import userResolver from '../components/user/userResolver';

const schema = makeExecutableSchema({
  typeDefs: `${printSchema(userSchemaSDL)}`,
  resolvers: userResolver
});

export default schema;
