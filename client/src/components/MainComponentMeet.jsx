import React from 'react';
import SingleCardUser from '../components/SingleCardUser.jsx';
import SideBarParticipant from '../components/SideBarParticipant.jsx';
import SideBarChat from "../components/SideBarChat.jsx";
import MeetDummyData from "../MeetDummyData.js";

function MainComponentMeet({ className }) { // Accept className prop
    let currentClicked = "";

    return (
        <div className={`flex flex-1 justify-center items-center flex-wrap container ${className}`}>
            <div className='flex justify-center items-center flex-wrap flex-1 max-h-screen overflow-x-hidden'>
                {
                    MeetDummyData[0].participants.map((x, i) => (
                        <SingleCardUser data={x} key={i} />
                    ))
                }
            </div>
            {
                currentClicked === "chat" ? (
                    <SideBarChat />
                ) : currentClicked === "participants" ? (
                    <SideBarParticipant />
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default MainComponentMeet;
