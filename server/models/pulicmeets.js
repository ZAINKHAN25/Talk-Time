import mongoose from 'mongoose';

const pbRoomSchema = mongoose.Schema({
    roomCode: { type: String, required: true, unique: true },
    roomAdmin: { type: String, required: true },
    maxParticipants: { type: Number, default: 15 },
    isLocked: { type: Boolean, default: false },
    roomServer: { type: String, required: true },
    roomTopic: { type: String },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users' }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
}, { timestamps: true });

const pbRoom = mongoose.model('public-room', pbRoomSchema);

export default pbRoom;
