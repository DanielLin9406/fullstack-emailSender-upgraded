import mongoose from 'mongoose';
import { dbURL } from '../../config/keys';

const dBUrl = dbURL;
const opts = { useNewUrlParser: true };
const connectDb = () => {
  return mongoose.connect(dBUrl, opts);
};

export { connectDb };
export default mongoose;
