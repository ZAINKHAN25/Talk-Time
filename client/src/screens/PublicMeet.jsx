import React from 'react';
import NavbarMeet from '../components/NavbarMeet.jsx';
import MainComponentMeet from "../components/MainComponentMeet.jsx";
import MeetFooter from "../components/MeetFooter.jsx";

function PublicMeet() {
    return (
        <div className='w-screen h-screen flex flex-col bg-[#1b1a1d] text-white overflow-x-hidden'>
            <NavbarMeet data={{ meetName: "apple", participents: 2, time: "34: 33" }} />
            <MainComponentMeet className="flex-grow" /> {/* Added className */}
            <MeetFooter />
        </div>
    )
}

export default PublicMeet;
