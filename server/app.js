import express from 'express';
import bodyParser from 'body-parser';
import { customAlphabet } from 'nanoid';
import PBMeet from './models/publicmeets.js';
import './db.js';

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.post('/api/createpbmeet', async (req, res) => {
  try {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(alphabet, 5);
    let code = nanoid();


    let existingMeeting = await PBMeet.findOne({ roomCode: code });
    while (existingMeeting) {
      code = nanoid();
      existingMeeting = await PBMeet.findOne({ roomCode: code });
    }


    const newMeeting = new PBMeet({
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


    const meeting = await PBMeet.findOne({ roomCode });

    if (!meeting) {
      return res.status(404).json({ message: 'Meeting not found' });
    }



    res.status(200).json(meeting);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/get/getallpbmeet', async (req, res) => {
  try {
    const meetings = await PBMeet.find();
    res.json(meetings);
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
