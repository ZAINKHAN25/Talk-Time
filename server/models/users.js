import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    camSource : { type: String },
    isCamTrue : { type: String },
    audioSource : { type: String },
    isAudioTrue : { type: String },
    screenSource : { type: String },
    isScreenTrue : { type: String },
}, { timestamps: true });



const User = mongoose.model('Users', userSchema);


export default User;