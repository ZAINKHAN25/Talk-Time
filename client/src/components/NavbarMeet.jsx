import React from 'react'

function NavbarMeet({ data }) {
    return (
        <div className="flex justify-start items-center w-full gap-10 p-3 border-[rgba(255,255,255,0.1)] border">
            <h1 className='font-semibold text-2xl'>Gather_Meet:</h1>
            <div className='flex flex-col'>
                <span className='font-bold text-xl'>{data.meetName}</span>
                <div className='flex gap-3'>
                    <div className='border-r-2 border-[rgba(255,255,255,0.2)] pe-3'>
                        {data.participents} Participant
                    </div>
                    <div>
                        {data.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMeet