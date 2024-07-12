import { FaLink, FaMicrophone, FaPhoneAlt, FaRecordVinyl, FaUnlock, FaVideoSlash } from 'react-icons/fa';
import { MdOutlineChat, MdOutlinePeople, MdOutlineStopScreenShare } from "react-icons/md";


const meetFooterDummyDate = {
    firstCol: [
        {
            icon: <FaUnlock />,
            txt: "Lock Room"
        },
        {
            icon: <FaLink />,
            txt: "Copy Link"
        }
    ],
    secondCol: [
        {
            icon: <FaVideoSlash />,
            txt: "Video"
        },
        {
            icon: <FaMicrophone />,
            txt: "Audio"
        },
        {
            icon: <FaPhoneAlt />,
            txt: "Leave Call"
        },
    ],
    thirdCol: [
        {
            icon: <MdOutlinePeople />,
            txt: "Participants"
        },
        {
            icon: <MdOutlineChat />,
            txt: "Chat"
        },
        {
            icon: <MdOutlineStopScreenShare />,
            txt: "Share Screen"
        },
        {
            icon: <FaRecordVinyl />,
            txt: "Record"
        },
    ]
};

export default meetFooterDummyDate;