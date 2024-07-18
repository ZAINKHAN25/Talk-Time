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

            <div className='flex items-center flex-col gap-3'>

                <div className='flex justify-center items-center flex-col gap-3'>
                    <div className='flex flex-col'>
                        <OtpInput
                            containerStyle={"flex"}
                            inputStyle={"text-black w-10 h-10 mx-2 text-center rounded-xl transition-all outline-none hover:scale-105 hover:shadow-md focus:ring-gray-700 focus:ring-1 text-lg"}
                            value={otp}
                            onChange={(value) => setOtp(value.toUpperCase())}
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
                        Join
                    </button>
                    <p className="text-center">
                        Got an invite code? Enter above.
                    </p>

                </div>

                <div className='flex justify-center items-center flex-col gap-3 w-full'>
                    <div className='w-full relative text-xl'>
                        <p className='text-center w-max mx-auto bg-transparent px-2'>Or</p>
                        <span className='w-5/12 absolute border-b border-black my-auto -translate-y-3 left-0'></span>
                        <span className='w-5/12 absolute border-b border-black my-auto -translate-y-3 right-0'></span>
                    </div>
                    <button
                        type="button"
                        onClick={() => navigateTo('/public/zain')}
                        className="transition-all ms-4 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                    >
                        Create a Room
                    </button>
                </div>

            </div>
        </div >
    );
}

export default JoiningPrivateMeetComponent;
