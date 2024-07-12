import React from 'react';

import NavbarMeet from '../components/NavbarMeet.jsx';
import MainComponentMeet from "../components/MainComponentMeet.jsx";
import MeetFooter from "../components/MeetFooter.jsx";


function PublicMeet() {



    return (
        <div className='w-screen h-screen flex flex-col overflow-x-hidden bg-[#1b1a1d] text-white'>
            <NavbarMeet data={{ meetName: "apple", participents: 2, time: "34: 33" }} />
            <MainComponentMeet />
            <MeetFooter />
        </div>
    )
}

export default PublicMeet;