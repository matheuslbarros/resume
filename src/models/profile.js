import mongoose, { Schema } from 'mongoose';

var ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  headline: String,
  bio: {
    type: String,
    required: true
  },
  fone: String,
  skype: String,
  site: String,
  experience: [
    {
      role: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      start: {
        type: Date,
        required: true
      },
      end: Date,
      description: String,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Profile', ProfileSchema);