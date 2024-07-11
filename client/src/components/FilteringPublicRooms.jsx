import React, { useState } from 'react';

function FilteringPublicRooms() {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };



    return (
        <div className='px-5 py-3 my-2 shadow-[1px_1px_15px_5px_rgba(255,255,255,0.8)] rounded-md w-full border-2 border-gray-600/5 backdrop-blur-sm flex justify-between items-center'>

            <div className="relative inline-block text-left mr-auto text-gray-700">


                <div title='Server'>
                    <button
                        type="button"
                        className="inline-flex justify-center gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibol shadow-sm ring-1 ring-inset ring-gray-700 transition-all hover:scale-105 hover:shadow-lg active:bg-blue-50"
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
                                <a href="#" className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">Pakistan</a>
                                <a href="#" className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">India</a>
                                <a href="#" className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">U K</a>
                                <a href="#" className="RegionDropDownLIs" role="menuitem" tabIndex="-1" id="menu-item-0">Turkeye</a>
                            </div>
                        </div>
                    )
                }
            </div>

            <input type="text" placeholder="Search Room" className="flex-1 p-4 py-2 mx-2 rounded-xl scale-90 transition-all outline-none hover:scale-95 hover:shadow-md focus:ring-gray-700 focus:ring-1" />

            <button
                type="button"
                className="text-white transition-all bg-[#2567D9]/70 hover:bg-[#2557D6] none font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
            >
                Create Meet
            </button>

        </div>
    )
}

export default FilteringPublicRooms