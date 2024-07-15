import Comments from "../models/comments.js";
import PbRoomsModel from "../models/pbmeets.js";

async function addComment(req, res) {
    try {
        const { userId, message, roomCode } = req.body;

        if (!userId || !message || !roomCode) {
            return res.status(400).json({ message: 'userId, message, and roomCode are required' });
        }

        const meeting = await PbRoomsModel.findOne({ roomCode });
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        const newComment = new Comments({ userId, message });
        await newComment.save();

        meeting.comments.push(newComment._id);
        await meeting.save();

        res.status(200).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

export { addComment };
