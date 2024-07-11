import React from 'react';

import NavbarMeet from '../components/NavbarMeet.jsx';
import SingleCardUser from '../components/SingleCardUser.jsx';
import SideBarParticipant from '../components/SideBarParticipant.jsx';
import SideBarChat from "../components/SideBarChat.jsx"

import MeetDummyData from "../MeetDummyData.js";


function PublicMeet() {

    let currentClicked = "participants";


    return (
        <div className='w-screen h-screen flex flex-col overflow-x-hidden bg-[#1b1a1d] text-white'>
            <NavbarMeet data={{ meetName: "apple", participents: 2, time: "34: 33" }} />
            <div className='flex flex-1 justify-center items-center flex-wrap container mx-auto'>
                <div className='flex justify-center items-center flex-wrap flex-1'>

                    {
                        MeetDummyData[0].participants.map((x, i) => {
                            return (
                                <SingleCardUser data={x} key={i} />
                            )
                        })
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
        </div>
    )
}

export default PublicMeet;