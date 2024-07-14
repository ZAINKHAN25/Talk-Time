import ParticpantsModel from "../models/particpants.js"

async function getAllParticipants(req, res) {
    try {
        const allParticipants = await ParticpantsModel.find();
        res.status(200).json(allParticipants);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

async function getOneParticipant(req, res) {
    try {
        let { id } = req.body;

        const Participant = await ParticpantsModel.findOne({ _id: id });
        res.status(200).json(Participant);
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

async function addParticipant(req, res) {
    try {
        const { name, camSource, isCamTrue, audioSource, isAudioTrue, screenSource, isScreenTrue } = req.body;

        const newParticipant = new ParticpantsModel({
            name,
            camSource,
            isCamTrue,
            audioSource,
            isAudioTrue,
            screenSource,
            isScreenTrue
        });

        await newParticipant.save();
        res.status(201).json(newParticipant);

    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
}

async function updateParticipant(req, res) {
    try {
        const { name, camSource, isCamTrue, audioSource, isAudioTrue, screenSource, isScreenTrue, id } = req.body;

        const participant = await ParticpantsModel.findById(id);
        if (!participant) {
            return res.status(404).json({ message: 'Participant not found' });
        }


        participant.name = name;
        participant.camSource = camSource;
        participant.isCamTrue = isCamTrue;
        participant.audioSource = audioSource;
        participant.isAudioTrue = isAudioTrue;
        participant.screenSource = screenSource;
        participant.isScreenTrue = isScreenTrue;


        const updatedParticipant = await participant.save();

        res.status(200).json(updatedParticipant);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};



export { getAllParticipants, addParticipant, updateParticipant, getOneParticipant };