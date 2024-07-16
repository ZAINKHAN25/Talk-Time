import React, { useState, useEffect } from 'react';
import { FaRandom } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import DummyNames from '../DummyNames.js';

function LandingJoiningSections() {

    const navigateTo = useNavigate();
    const [profileName, setProfileName] = useState('');

    useEffect(() => {
        setProfileName(createRandomName());
    }, []);

    return (
        <div className="flex flex-1 w-full flex-col justify-between items-center p-5 gap-5">

            <p className="w-full sm:w-3/5 text-lg px-2">Your Profile name:</p>

            <div className='w-full flex justify-center items-center sm:w-3/5'>
            
                <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    placeholder="Profile Name"
                    className="flex-1 p-4 py-2 rounded-xl transition-all outline-none hover:scale-y-105 hover:shadow-md focus:ring-gray-700 focus:ring-1"
                />
                <div
                    className='rounded-full p-3 text-white bg-[#24292F] ms-2  cursor-pointer hover:bg-[#24292F]/90 hover:shadow-md active:bg-[#24292F]/80' title='Generate random name'
                    onClick={() => setProfileName(createRandomName())}
                >
                    <FaRandom size={20} />
                </div>

            </div>

            <button
                type="button"
                className="sm:w-3/5 w-full transition-all text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                onClick={() => navigateTo('/public/zain')}
            >
                Quick Start
            </button>
            <div className="flex items-center sm:w-3/5 w-full">
                <button
                    type="button"
                    onClick={() => navigateTo('/public-meets')}
                    className="w-2/4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                    Public Meets
                </button>
                <button
                    type="button"
                    onClick={() => navigateTo('/private-meet')}
                    className="w-2/4 text-white transition-all bg-[#2567D9]/70 hover:bg-[#2557D6] none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 "
                >
                    Private Meet
                </button>
            </div>

            <p
                className="flex-1 cursor-pointer transition-all hover:scale-105"
                onClick={() => navigateTo('/join-meet')}
            >
                Get an invite code?
            </p>
        </div>
    );
}

function createRandomName() {
    const firstNames = DummyNames.fistName;
    const secondNames = DummyNames.secondName;

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomSecondName = secondNames[Math.floor(Math.random() * secondNames.length)];

    return `${randomFirstName} ${randomSecondName}`;
}

export default LandingJoiningSections;