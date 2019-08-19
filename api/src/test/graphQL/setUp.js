import 'dotenv/config';
import { connectDb } from '../../libs/db/mongoose';
require('../../components/user/userModel').default;

connectDb();
