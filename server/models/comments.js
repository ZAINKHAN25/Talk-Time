import mongoose from 'mongoose';

const commentsSchema = mongoose.Schema({
    message: { type: String, require: true },
    userName: { type: String, require: true },
    uid: { type: String, require: true }
}, { timestamps: true });

const comments = mongoose.model('comments', commentsSchema);

export default comments;
