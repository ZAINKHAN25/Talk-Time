import React from 'react';
import NavbarComponent from "../components/NavbarComponent.jsx";
import FilteringPublicRooms from "../components/FilteringPublicRooms.jsx";



function PublicMeetsPage() {
  return (
    <div
      className='flex flex-col items-center w-screen min-h-screen px-16 bg-gradient-to-r from-blue-100 to-cyan-100'
    >

        <NavbarComponent pageName={"Public Meets"} />
        <FilteringPublicRooms />

    </div>
  )
}

export default PublicMeetsPage