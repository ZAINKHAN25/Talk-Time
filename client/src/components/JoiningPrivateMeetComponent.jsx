import React, { useState } from 'react';
import PrivteJoinImg from "../assets/Private-Join-Img.png";
import OtpInput from 'react-otp-input';

import { useNavigate } from "react-router-dom";


function JoiningPrivateMeetComponent() {

    const navigateTo = useNavigate();
    const [otp, setOtp] = useState('');

    return (
        <div className='flex justify-evenly w-full items-center gap-5 my-5 flex-col flex-wrap-reverse sm:flex-row'>
            <div className='rounded-full bg-gray-700 p-3 sm:p-10'>
                <img src={PrivteJoinImg} className='w-48 m-2 sm:w-96' />
            </div>
            <div>
                <div className='flex items-center flex-col my-2 gap-3'>

                    <div className='flex flex-col'>

                        {/* <input
                        type="text"
                        placeholder="Enter Code"
                        className="p-4 w-20 py-2 my-5 rounded-xl transition-all outline-none hover:scale-105 hover:shadow-md focus:ring-gray-700 focus:ring-1 text-black"
                    /> */}
                        <OtpInput
                            containerStyle={"flex"}
                            inputStyle={"text-black w-10 h-10 my-3 mx-2 text-center font-5xl rounded-xl transition-all outline-none hover:scale-105 hover:shadow-md focus:ring-gray-700 focus:ring-1"}
                            value={otp}
                            onChange={setOtp}
                            numInputs={5}
                            placeholder='XXXXX'
                            skipDefaultStyles={true}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => navigateTo('/public/zain')}
                        className="transition-all ms-4 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                        Join / Create Room
                    </button>

                </div>
                <p
                    className="text-center"
                >
                    Got an invite code? Enter above.
                </p>
            </div>
        </div>
    )
}

export default JoiningPrivateMeetComponent;