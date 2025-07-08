import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-800 p-3 flex items-center justify-between px-3 min-[500px]:px-12 '>
            <div>
                <h2 className='text-white font-bold capitalize text-2xl max-[500px]:text-[14px]'>
                <span className="text-green-500">&lt;</span>
                <span>pass</span><span className="text-green-500">/op&gt;</span>
            </h2>
            </div>
            <div className='cursor-pointer'>
                <button onClick={()=>{window.open("https://github.com/Vimal-79")}} className='bg-green-500 flex items-center justify-center text-white md:font-bold max-[500px]:text-[12px] gap-1 p-2 shadow-md shadow-black  max-[500px]:p-1 rounded-full'>
                    <img className='w-8 max-[500px]:w-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="" />
                    <span className='max-[200px]:hidden'>Github</span></button>
            </div>
        </nav>
    )
}

export default Navbar
