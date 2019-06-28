/* 
Note: 這個方法還需要後期額外操作，不見得比較方便
Using graphql-compose-mongoose to generate graphql schema(with resolver)
用這個方法，我們不需要自訂義resolver
而是透過 UserTC.getResolver('findById')
*/

import { schemaComposer } from 'graphql-compose';
import { printSchema } from 'graphql';
import user from '../components/user';
import survey from '../components/survey';

schemaComposer.merge(user.userSchema);
schemaComposer.merge(survey.surveySchema);

const mergedSchema = schemaComposer.buildSchema();
const mergedTypedDefs = printSchema(mergedSchema);

export { mergedTypedDefs };
export default mergedSchema;
