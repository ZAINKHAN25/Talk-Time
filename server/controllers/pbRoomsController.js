import PbRoomsModel from "../models/pbmeets.js";
import { customAlphabet } from 'nanoid';
import mongoose from "mongoose";
import Participants from "../models/particpants.js";

async function getAllPbRooms(req, res) {
    try {
        const allPbRooms = await PbRoomsModel.find();
        res.status(200).json(allPbRooms);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

async function addPbRooms(req, res) {
    try {
        const { adminUid, userServer } = req.body;
        if (!adminUid || !userServer) {
            return res.status(400).json({ message: 'adminUid and userServer are required' });
        }

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nanoid = customAlphabet(alphabet, 5);
        let code = nanoid();

        let existingMeeting = await PbRoomsModel.findOne({ roomCode: code });
        while (existingMeeting) {
            code = nanoid();
            existingMeeting = await PbRoomsModel.findOne({ roomCode: code });
        }

        const newMeeting = new PbRoomsModel({
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
}

async function joinPbRoom(req, res) {
    try {
        const { roomCode, userUid } = req.body;
        if (!roomCode || !userUid) {
            return res.status(400).json({ message: 'roomCode and userUid are required' });
        }

        const meeting = await PbRoomsModel.findOne({ roomCode }).populate('participants');
        if (!meeting) {
            return res.status(404).json({ message: 'Meeting not found' });
        }

        const isParticipant = meeting.participants.some(participant => participant === userUid);
        if (isParticipant) {
            return res.status(400).json({ message: 'User already joined the meeting' });
        }

        const userExists = await Participants.findById({ userUid });
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
}

export { getAllPbRooms, joinPbRoom, addPbRooms };