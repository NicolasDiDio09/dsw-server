import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    }
  }
);

export default mongoose.model('Comment',commentSchema);