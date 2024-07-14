import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    userId: { type: String, required: true },
    message: { type: String, required: true }
},
    {
        timestamps: true
    }
);

const Comments = mongoose.model('Comments', commentSchema);

export default Comments;