import React from 'react';
import PageNotFoundImg from "../assets/404-Error.png"

function NotFoundPage() {
    return (
        <div className='bg-gradient-to-r from-blue-100 to-cyan-100 max-w-screen h-screen overflow-x-hidden px-2 flex items-center justify-center'>
            <img className='container mx-auto' style={{ width: "100vw", height: "95vh", objectFit: "contain" }} src={PageNotFoundImg} />
        </div>
    )
}

export default NotFoundPage