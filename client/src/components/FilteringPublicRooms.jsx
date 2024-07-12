import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaMagnifyingGlass } from "react-icons/fa6";

function FilteringPublicRooms() {

    const navigateTo = useNavigate();


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <div className='flex flex-col justify-center items-center flex-wrap gap-4 container px-5 py-3 my-2 mx-auto shadow-[1px_1px_15px_5px_rgba(255,255,255,0.8)] rounded-md w-5/6 border-2 border-gray-600/5 sm:flex-row sm:w-full'>

            <div className="relative w-full inline-block text-gray-700 sm:w-max">


                <div className='w-full' title='Server'>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibol shadow-sm ring-1 ring-inset ring-gray-700 transition-all hover:scale-105 hover:shadow-lg active:bg-blue-50"
                        id="menu-button"
                        aria-expanded={menuOpen ? "true" : "false"}
                        aria-haspopup="true"
                        onClick={toggleMenu}
                    >
                        All Language
                        <svg className="-mr-1 h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {
                    menuOpen && (
                        <div
                            className="absolute left-4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-700 ring-opacity-40 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            <div className="py-1 flex-col flex" role="none">
                                <span className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">Pakistan</span>
                                <span className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">India</span>
                                <span className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">U K</span>
                                <span className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">Turkeye</span>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className='flex-1 w-full flex gap-2'>
                <input type="text" placeholder="Search Room..." className="flex-1 w-full p-4 py-2 rounded-xl transition-all outline-none hover:shadow-md focus:ring-gray-700 focus:ring-1" />
                <div
                    className="rounded-full scale-90 p-2 shadow-sm text-gray-800 border-2 border-gray-700 flex items-center justify-center transition-all cursor-pointer hover:bg-gray-700 hover:text-white hover:scale-100 hover:shadow-lg active:bg-gray-600"
                >
                    <FaMagnifyingGlass size={20} />
                </div>
            </div>

            <button
                type="button"
                onClick={() => navigateTo("/public/zain")}
                className="text-white transition-all bg-[#2567D9]/70 hover:bg-[#2557D6] none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2"
            >
                Create Meet
            </button>

        </div>
    )
}

export default FilteringPublicRooms