import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import PublicRoomDummyData from '../MeetDummyData';
import { CiMicrophoneOff, CiVideoOff } from "react-icons/ci";

function SideBarParticipant() {
    return (
        <div className='bg-white/5 max-w-full min-w-80 h-full max-h-screen border-[rgba(255,255,255,0.1)] border transition-all flex flex-col justify-center items-center'>
            <div className='border-[rgba(255,255,255,0.1)] border w-full px-5 py-4 text-base font-semibold flex justify-between items-center'>
                <p>Participants</p>
                <span className='rounded-full p-2 cursor-pointer bg-[#1b1a1d] transition-all hover:bg-blue-500'><RxCross2 size={20} /></span>
            </div>
            <div className='flex-1 w-full p-4'>
                {
                    PublicRoomDummyData[0].participants.map((x, i) => {
                        return (
                            <div className='flex justify-between items-center w-full my-2 text-base' key={i}>
                                <div>{x.name}</div>
                                <div className='gap-4 flex '>
                                    <CiMicrophoneOff size={25} />
                                    <CiVideoOff size={25} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SideBarParticipant;