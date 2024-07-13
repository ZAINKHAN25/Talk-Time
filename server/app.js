// index.js

import express from 'express';
import bodyParser from 'body-parser';
import { customAlphabet } from 'nanoid';
import PBMeet from './models/publicmeets.js'; // Adjust the path as per your file structure
import './db.js'; // Ensure db.js runs and connects to MongoDB

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle POST requests
app.post('/api/createpbmeet', async (req, res) => {
  try {
    // Generate a unique roomCode
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(alphabet, 5);
    let code = nanoid();

    // Check if the generated code already exists
    let existingMeeting = await PBMeet.findOne({ roomCode: code });
    while (existingMeeting) {
      code = nanoid(); // Regenerate code if it already exists
      existingMeeting = await PBMeet.findOne({ roomCode: code });
    }

    // Create a new PBMeet instance based on req.body
    const newMeeting = new PBMeet({
      userName: req.body.userName,
      userUid: req.body.userUid,
      userServer: req.body.userServer,
      roomCode: code,
      participants: {
        name: req.body.participants.name,
        camSource: req.body.participants.camSource,
        isCamTrue: req.body.participants.isCamTrue,
        audioSource: req.body.participants.audioSource,
        isAudioTrue: req.body.participants.isAudioTrue,
        screenSource: req.body.participants.screenSource,
        isScreenTrue: req.body.participants.isScreenTrue,
      },
    });

    // Save the new PBMeet instance to the database
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.post('/api/joinpbmeet', async (req, res) => {
  try {
    const { roomCode } = req.body;

    // Find the meeting by roomCode
    const meeting = await PBMeet.findOne({ roomCode });

    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }

    // Handle the joining logic here (e.g., updating participant details)

    res.status(200).json(meeting);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
