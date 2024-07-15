import PbMeetsModel from "../models/pbmeets.js";
import { customAlphabet } from 'nanoid';
import Participants from "../models/particpants.js";

async function getAllPbRooms(req, res) {
  try {
    const allPbRooms = await PbMeetsModel.find().populate('participants').populate('comments');
    res.status(200).json(allPbRooms);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

async function addPbRooms(req, res) {
  try {
    const { adminUid, userServer } = req.body;
    if (!adminUid || !userServer) {
      return res.status(400).json({ message: 'adminUid and userServer are required' });
    }

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(alphabet, 5);
    let code = nanoid();

    let existingMeeting = await PbMeetsModel.findOne({ roomCode: code });
    while (existingMeeting) {
      code = nanoid();
      existingMeeting = await PbMeetsModel.findOne({ roomCode: code });
    }

    const newMeeting = new PbMeetsModel({
      adminUid,
      userServer,
      roomCode: code,
      participants: [adminUid],
      comments: [],
    });

    await newMeeting.save();

    res.status(201).json(newMeeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

async function joinPbRoom(req, res) {
  try {
    const { roomCode, userUid } = req.body;
    if (!roomCode || !userUid) {
      return res.status(400).json({ message: 'roomCode and userUid are required' });
    }


    const meeting = await PbMeetsModel.findOne({ roomCode }).populate('participants');
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    const isParticipant = meeting.participants.some(participant => participant._id == userUid);
    if (isParticipant) {
      return res.status(400).json({ message: 'User already joined the meeting' });
    }

    const userExists = await Participants.findById(userUid);
    if (!userExists) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    meeting.participants.push(userExists._id);
    await meeting.save();

    res.status(200).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

async function joinRandomPbRoom(req, res) {
  try {
    const { userUid } = req.body;
    if (!userUid) {
      return res.status(400).json({ message: 'userUid is required' });
    }

    const allMeetings = await PbMeetsModel.find().populate('participants');
    if (allMeetings.length === 0) {
      return res.status(404).json({ message: 'No public meetings available' });
    }

    const availableMeetings = allMeetings.filter(meeting => !meeting.participants.some(participant => participant._id == userUid));
    if (availableMeetings.length === 0) {
      return res.status(400).json({ message: 'User is already a participant in all public meetings' });
    }

    const randomMeeting = availableMeetings[Math.floor(Math.random() * availableMeetings.length)];

    const userExists = await Participants.findById(userUid);
    if (!userExists) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    randomMeeting.participants.push(userExists._id);
    await randomMeeting.save();

    res.status(200).json(randomMeeting);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

async function leavePbRooms(req, res) {
  try {
    const { roomCode, userUid } = req.body;

    if (!roomCode || !userUid) {
      return res.status(400).json({ message: 'roomCode and userUid are required' });
    }

    const meeting = await PbMeetsModel.findOne({ roomCode }).populate('participants');
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    const userIndex = meeting.participants.findIndex(participant => participant._id.toString() === userUid);
    if (userIndex === -1) {
      return res.status(400).json({ message: 'User is not a participant of the meeting' });
    }

    if (meeting.adminUid === userUid) {
      if (meeting.participants.length === 1) {
        await PbMeetsModel.deleteOne({ roomCode });
        return res.status(200).json({ message: 'Meeting deleted as no participants are left' });
      } else {
        meeting.participants.splice(userIndex, 1);
        meeting.adminUid = meeting.participants[0]._id;
      }
    } else {
      meeting.participants.splice(userIndex, 1);
    }

    await meeting.save();

    res.status(200).json({ message: 'User has left the meeting', meeting });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

async function updatePbRoomHeading(req, res) {
  try {
    const { heading, userId, roomCode } = req.body;

    if (!heading || !userId || !roomCode) {
      return res.status(400).json({ message: 'heading, userId, and roomCode are required' });
    }

    const meeting = await PbMeetsModel.findOne({ roomCode });
    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    if (meeting.adminUid !== userId) {
      return res.status(403).json({ message: 'User is not authorized to update the heading' });
    }

    meeting.roomHeading = heading;
    await meeting.save();

    res.status(200).json({ message: 'Heading updated successfully', meeting });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}

async function searchServer(req, res) {
  try {
    const { server } = req.body;

    const meetings = await PbMeetsModel.find({ userServer: server });
    if (meetings.length > 0) {
      res.status(200).json(meetings);
    } else {
      res.status(404).json({ message: 'No public meeting found on the specified server' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
}


export { getAllPbRooms, joinPbRoom, addPbRooms, leavePbRooms, joinRandomPbRoom, searchServer, updatePbRoomHeading };