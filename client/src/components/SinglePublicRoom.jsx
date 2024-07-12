import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function SinglePublicRoom({ data }) {

    const navigateTo = useNavigate();

    return (
        <div
            className='px-5 py-3 my-2 flex-col justify-between shadow-[1px_1px_15px_5px_rgba(255,255,255,0.8)] rounded-md w-5/6 border-2 border-gray-600/5 flex flex-wrap items-center gap-4 sm:flex-row sm:gap-10 sm:w-full'
        >
            <div className='flex flex-col justify-center items-center'>
                <MdAccountCircle size={40} />
                <p>
                    Players: {data.players.length}/{data.maxPlayers}
                </p>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <img
                    src='https://cdn.britannica.com/46/3346-050-DE92F66A/flag-symbolism-Pakistan-design-Islamic.jpg' width={55}
                    alt='Country Img'
                />
                <p>{data.server}</p>
            </div>

            <div className='flex-1 font-semibold text-xl'>
                {data.topic}
            </div>

            <button type="button"
                onClick={()=>navigateTo("/public/zain")}
                className="transition-all text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-2 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30">
                Join
            </button>
        </div>
    )
}

export default SinglePublicRoom;