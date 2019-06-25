import mongoose from '../../libs/db/mongoose';

const recipientSchema = new mongoose.Schema({
  email: String,
  responded: {
    type: Boolean,
    default: false
  }
});

export default recipientSchema;
