import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function NavbarComponent({ pageName }) {

    const navigateTo = useNavigate();

    return (
        <div
            className='flex relative justify-center flex-wrap container items-center w-screen py-5 px-2 gap-5'
        >

            <div
                className='p-3 cursor-pointer text-white rounded-full transition-all bg-gradient-to-br from-gray-700 to-gray-800 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-600 hover:to-gray-900'
                onClick={() => navigateTo('/')}
            >
                <FaArrowLeft size={25} />
            </div>
            <h1
                className='text-5xl bg-gradient-to-br text-gray-800 mx-auto'
            >
                {pageName}
            </h1>
            <div className='text-transparent hidden sm:block'>
                Hello
            </div>
        </div>
    )
}

export default NavbarComponent