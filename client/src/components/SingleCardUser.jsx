import React from 'react';
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";

function SingleCardUser({ data }) {
    return (
        <div
            className="flex items-center justify-center p-5 transition-all bg-white/5 m-2 rounded-lg w-96 min-w-10 relative"
            style={{ height: "450px", minHeight: "200px" }}
        >
            <p className='text-2xl'>
                {data.name}
            </p>
            {

                data.audio === true ? (
                    <div className="absolute top-5 right-5 rounded-full p-2 bg-red-400">
                        <CiMicrophoneOff size={25} />
                    </div>
                ) : (
                    <div className="absolute top-5 right-5 rounded-full p-2 bg-blue-400">
                        <CiMicrophoneOn size={25} />
                    </div>
                )
            }
        </div>
    )
}

export default SingleCardUser