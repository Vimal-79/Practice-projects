import React from 'react'
import Hero from './Hero'

function Footer() {
  return (
    <div className='bg-neutral-800 flex flex-col items-center fixed w-full bottom-0 gap-1'>
      <div className="flex font-extrabold capitalize text-[18px] max-[500px]:text-[16px]">
          <span className="text-green-500">&lt;</span>
          pass
          <span className="text-green-500 uppercase">/op&gt;</span>
        </div>
      <p className='flex text-white text-[10px]'>Made with <img className='mx-1 w-3 h-3' src="./src/assets/heart.png" alt="heart image" /> by Vimal</p>
    </div>
  )
}

export default Footer
