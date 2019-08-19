import mongoose from '../../libs/db/mongoose';
import RecipientSchema from './recipient';

const Schema = mongoose.Schema;
const surveySchema = new mongoose.Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

// _user this is a reference field.
export default mongoose.model('Surveys', surveySchema);
