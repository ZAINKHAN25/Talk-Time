import React from 'react';

import MeetFooterDummyData from "../MeetFooterDummyData.js";


function SingleFooter({ data }) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className={`rounded-full ${data.txt === "Leave Call" ? "bg-red-400" : "bg-white/5"} p-3 cursor-pointer ${data.txt === "Leave Call" ? "hover:bg-red-700" : "hover:bg-blue-500"} mb-1`}>{data.icon}</div>
            <p className='text-xs'>{data.txt}</p>
        </div>
    )
}

function MeetFooter() {
    return (
        <div className='flex justify-center items-center flex-wrap px-3 text-base py-3 relative bottom-0 w-screen'>
            <div className='flex gap-5 justify-center items-center px-3 mx-auto my-1'>
                {
                    MeetFooterDummyData.firstCol.map((x, i) => {
                        return (
                            <SingleFooter key={i} data={x} />
                        )
                    })
                }
            </div>
            <div className='flex gap-5 justify-center items-center px-3 mx-auto my-1'>
                {
                    MeetFooterDummyData.secondCol.map((x, i) => {
                        return (
                            <SingleFooter key={i} data={x} />
                        )
                    })
                }
            </div>
            <div className='flex gap-5 justify-center items-center px-3 mx-auto my-1'>
                {
                    MeetFooterDummyData.thirdCol.map((x, i) => {
                        return (
                            <SingleFooter key={i} data={x} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MeetFooter;