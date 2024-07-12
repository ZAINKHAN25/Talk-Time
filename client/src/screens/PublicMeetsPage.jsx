import React from 'react';

import NavbarComponent from "../components/NavbarComponent.jsx";
import FilteringPublicRooms from "../components/FilteringPublicRooms.jsx";
import SinglePublicRoom from "../components/SinglePublicRoom.jsx";
import PublicRoomDummyData from '../PublicRoomDummyData.js';



function PublicMeetsPage() {
  return (
    <div className='bg-gradient-to-r from-blue-100 to-cyan-100'>

      <div
        className='container flex flex-col items-center w-screen min-h-screen mx-auto py-5 px-3'
      >

        <NavbarComponent pageName={"Public Meets"} />
        <FilteringPublicRooms />
    
        {
          PublicRoomDummyData.map((x, i) => {
            return (
              <SinglePublicRoom key={i} data={x} />
            )
          })
        }

      </div>

    </div>
  )
}

export default PublicMeetsPage;