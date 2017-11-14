import mongoose from 'mongoose';

mongoose.Promise = Promise;

export default mongoose;

export const options = {
  useMongoClient: true,
};
