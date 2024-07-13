import React, { useState } from 'react';
import PageNotFoundImg from "../assets/404-Error.png"
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function NotFoundPage() {
    const navigateTo = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='bg-gradient-to-r from-blue-100 to-cyan-100 max-w-screen h-screen overflow-x-hidden px-2 flex items-center justify-center'>
            <div className='container mx-auto flex flex-col justify-center items-center w-full h-full'>
                <button
                    type="button"
                    className="w-52 transition-all duration-300 absolute top-5 left-5 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-5 group"
                    onClick={() => navigateTo('/')}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <FaArrowLeft className={`me-2 ${isHovered ? "scale-x-100" : "scale-x-0"} transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} /> Go to Home Page
                </button>
                <img style={{ objectFit: "contain", width: "100%", height: "90vh" }} src={PageNotFoundImg} alt="Page not found" />
            </div>
        </div>
    );
}

export default NotFoundPage;
