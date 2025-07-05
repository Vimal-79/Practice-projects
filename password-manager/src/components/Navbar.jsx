import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-800 p-3 flex items-center justify-between px-12'>
            <div>
                <h2 className='text-white font-bold capitalize text-2xl'>
                <span className="text-green-500">&lt;</span>
                <span>pass</span><span className="text-green-500">/op&gt;</span>
            </h2>
            </div>
            <div>
                <ul>
                <li className='flex gap-4 text-white'>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
