import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import { printSchema } from 'graphql';

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const LanguagesSchema = new mongoose.Schema({
  language: String,
  skill: {
    type: String,
    enum: ['basic', 'fluent', 'native']
  }
});

const TestUserSchema = new mongoose.Schema({
  name: String, // standard types
  age: {
    type: Number,
    index: true
  },
  languages: {
    type: [LanguagesSchema], // you may include other schemas (here included as array of embedded documents)
    default: []
  },
  contacts: {
    // another mongoose way for providing embedded documents
    email: String,
    phones: [String] // array of strings
  },
  gender: {
    // enum field with values
    type: String,
    enum: ['male', 'female', 'ladyboy']
  },
  someMixed: {
    type: mongoose.Schema.Types.Mixed,
    description:
      'Can be any mixed type, that will be treated as JSON GraphQL Scalar Type'
  }
});
const TestUser = mongoose.model('TestUser', TestUserSchema);
const customizationOptions = {}; // left it empty for simplicity, described below
const UserTC = composeWithMongoose(TestUser, customizationOptions);

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById')
});

const graphqlSchema = schemaComposer.buildSchema();

// 利用此方法可以將物件的全部屬性與值展開，在轉換成字串印出來
console.log(JSON.stringify({ ...graphqlSchema }));

console.log(printSchema(graphqlSchema));
