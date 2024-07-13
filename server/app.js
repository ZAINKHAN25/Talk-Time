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
    // Generate a unique ranCode
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(alphabet, 5);
    let code = nanoid();
    
    // Check if the generated code already exists
    let existingMeeting = await PBMeet.findOne({ ranCode: code });
    while (existingMeeting) {
      code = nanoid(); // Regenerate code if it already exists
      existingMeeting = await PBMeet.findOne({ ranCode: code });
    }

    // Create a new PBMeet instance based on req.body
    const newMeeting = new PBMeet({
      userName: req.body.userName,
      userUid: req.body.userUid,
      userServer: req.body.userServer,
      ranCode: code,
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
