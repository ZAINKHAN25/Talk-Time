import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoIosDocument } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";


function SideBarChat() {
    return (
        <div className='bg-white/5 max-w-full min-w-80 h-full max-h-screen border-[rgba(255,255,255,0.1)] border transition-all flex flex-col justify-center items-center'>
            <div className='border-[rgba(255,255,255,0.1)] border w-full px-5 py-4 text-base font-semibold flex justify-between items-center'>
                <p>Chats</p>
                <span className='rounded-full p-2 cursor-pointer bg-[#1b1a1d] transition-all hover:bg-blue-500'><RxCross2 size={20}/></span>
            </div>
            <div className='flex-1'>
            </div>
            <div className='w-full p-3 d-flex flex-col justify-center items-center'>
                <input type="text" placeholder='Write your message...' className=' w-full bg-[#1b1a1d] p-3 rounded-lg border-[rgba(255,255,255,0.1)] border text-base shadow-md' />
                <div className="flex justify-between items-center my-3">
                    <IoIosDocument size={25}/>
                    <FaPaperPlane className='text-green-500' size={25}/>
                </div>
            </div>
        </div>
    )
}

export default SideBarChat;