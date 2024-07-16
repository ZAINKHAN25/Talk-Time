import React, { useState, useEffect } from 'react';

function RegionDropDown() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('');

    useEffect(() => {
        // Retrieve the stored region from localStorage when the component mounts
        const storedRegion = localStorage.getItem('selectedRegion');
        if (storedRegion) {
            setSelectedRegion(storedRegion);
        }
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleRegionSelect = (region) => {
        console.log(`Selected region: ${region}`);
        setSelectedRegion(region);
        localStorage.setItem('selectedRegion', region); // Save the selected region to localStorage
        setMenuOpen(false); // Close the menu after selecting a region
    };

    return (
        <div className="relative inline-block text-left mr-auto py-5 text-gray-700">
            <div title='Server'>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-2 text-sm font-semibol shadow-sm ring-1 ring-inset ring-gray-700 transition-all hover:scale-105 hover:shadow-lg active:bg-blue-50"
                    id="menu-button"
                    aria-expanded={menuOpen ? "true" : "false"}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                >
                    {selectedRegion || 'Guest'}
                    <svg className="-mr-1 h-5 w-5 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {menuOpen && (
                <div
                    className="absolute left-4 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-700 ring-opacity-40 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1 flex-col flex" role="none">
                        <a
                            href="#"
                            className="RegionDropDownLIs"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            onClick={() => handleRegionSelect('Pakistan')}
                        >
                            Pakistan
                        </a>
                        <a
                            href="#"
                            className="RegionDropDownLIs"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                            onClick={() => handleRegionSelect('India')}
                        >
                            India
                        </a>
                        <a
                            href="#"
                            className="RegionDropDownLIs"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-2"
                            onClick={() => handleRegionSelect('U K')}
                        >
                            U K
                        </a>
                        <a
                            href="#"
                            className="RegionDropDownLIs"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                            onClick={() => handleRegionSelect('Turkeye')}
                        >
                            Turkeye
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegionDropDown;