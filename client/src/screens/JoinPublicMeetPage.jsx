import React from 'react';

import NavbarComponent from "../components/NavbarComponent.jsx";
import JoiningPublicMeetComponent from "../components/JoiningPublicMeetComponent.jsx";

import JoiningImg from "../assets/Join-Img.png";


function JoinPublicMeetPage() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 overflow-x-hidden px-2">
            <div className='container flex flex-col items-center w-full min-h-screen my-2 mx-auto'>

                <NavbarComponent pageName={"Join with invite Code To Public Room"} />

                <JoiningPublicMeetComponent />

            </div>
        </div>
    )
}

export default JoinPublicMeetPage