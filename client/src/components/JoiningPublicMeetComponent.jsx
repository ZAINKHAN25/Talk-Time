import React from 'react';
import JoiningImg from "../assets/Join-Img.png";


function JoiningPublicMeetComponent() {
    return (
        <div className='flex justify-evenly w-full items-center gap-5 my-5 flex-wrap-reverse'>
            <div className='rounded-full bg-gray-700 p-10'>
                <img src={JoiningImg} className='max-w-sm' />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Code"
                    className="p-4 py-2 my-5 rounded-xl transition-all outline-none hover:scale-105 hover:shadow-md focus:ring-gray-700 focus:ring-1"
                />
                <button type="button" className="transition-all ms-4 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-5" >
                    Join
                </button>
                <p
                    className="text-center"
                >
                    Get an invite code?
                </p>
            </div>
        </div>
    )
}

export default JoiningPublicMeetComponent