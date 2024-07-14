import mongoose from 'mongoose';

const participantsScehma = mongoose.Schema({
  name: { type: String, required: true },
  camSource: { type: String },
  isCamTrue: { type: Boolean },
  audioSource: { type: String },
  isAudioTrue: { type: Boolean },
  screenSource: { type: String },
  isScreenTrue: { type: Boolean },
},
  {
    timestamps: true
  }
);

const Participants = mongoose.model('Participants', participantsScehma);

export default Participants;