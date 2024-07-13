// models/PBMeet.js

import mongoose from 'mongoose';

const pbMeetSchema = mongoose.Schema({
  userName: { type: String, required: true },
  userUid: { type: String, required: true },
  userServer: { type: String, required: true },
  roomCode: { type: String, required: true, unique: true },
  participants: {
    name: { type: String, required: true },
    camSource: { type: String },
    isCamTrue: { type: Boolean },
    audioSource: { type: String },
    isAudioTrue: { type: Boolean },
    screenSource: { type: String },
    isScreenTrue: { type: Boolean },
  },
}, { timestamps: true });

const PBMeet = mongoose.model('PBMeet', pbMeetSchema);

export default PBMeet;