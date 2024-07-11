import React from 'react';

import { MdAccountCircle } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


function LandingJoiningSections() {

    const navigateTo = useNavigate();

    return (
        <div
            className="flex flex-col justify-between items-center w-2/4"
        >

            <div className="rounded-full relative flex justify-center items-center shadow-gray-900 bg-gray-700 cursor-pointer transition-all hover:scale-110 hover:shadow-lg">

                <MdAccountCircle className="text-gray-50" size={140} />
                <div
                    className="absolute bottom-0 bg-slate-50 shadow-sm shadow-stone-300 text-gray-700 rounded-full"
                >
                    <TiArrowSync size={23} />
                </div>

            </div>
            <input
                type="text"
                placeholder="Profile Name"
                className="w-4/6 p-4 py-2 my-5 rounded-xl transition-all outline-none hover:scale-105 hover:shadow-md focus:ring-gray-700 focus:ring-1"
            />

            <button type="button" className="w-4/6  transition-all text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-5" >
                Quick Start
            </button>
            <div className="flex justify-between items-center w-4/6">
                <button
                    type="button"
                    onClick={() => navigateTo('/public-meets')}
                    className="w-2/4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                    Public Meets
                </button>
                <button
                    type="button"
                    className="w-2/4 text-white transition-all bg-[#2567D9]/70 hover:bg-[#2557D6] none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                >
                    Private Meet
                </button>


            </div>

            <p className="mt-3 cursor-pointer transition-all hover:scale-105">Get an invite code?</p>

        </div>
    )
}

export default LandingJoiningSections;