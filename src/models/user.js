import mongoose, { Schema } from 'mongoose';

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.options.toJSON = {};
UserSchema.options.toJSON.transform = (doc, ret, options) => {
  delete ret.password;
};

export default mongoose.model('User', UserSchema);