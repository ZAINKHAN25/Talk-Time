import React from 'react';

import NavbarComponent from "../components/NavbarComponent.jsx";
import JoiningPrivateMeetComponent from "../components/JoiningPrivateMeetComponent.jsx";



function JoinPrivateMeetPage() {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 overflow-x-hidden px-2">
            <div className='container flex flex-col items-center w-full min-h-screen my-2 mx-auto'>

                <NavbarComponent pageName={"Private_Meet"} />

                <JoiningPrivateMeetComponent />

            </div>
        </div>
    )
}

export default JoinPrivateMeetPage