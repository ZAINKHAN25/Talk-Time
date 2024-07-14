import mongoose, { Mongoose } from 'mongoose';

const pbMeetSchema = mongoose.Schema({
  adminUid: { type: String, required: true },
  userServer: { type: String, required: true },
  roomCode: { type: String, required: true, unique: true },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participants",
    required: true,
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
    required: true,
  }],
}, { timestamps: true });

const PBMeets = mongoose.model('public-meets', pbMeetSchema);

export default PBMeets;