const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./recipient');

const surveySchema = new mongoose.Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [ RecipientSchema ],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

// _user this is a reference field.

mongoose.model('Surveys', surveySchema);