import React from 'react'
import Hero from './Hero'

function Footer() {
  return (
    <div className='bg-neutral-800 flex flex-col items-center fixed w-full bottom-0 gap-1'>
      <Hero />
      <p className='flex text-white'>Made with <img className='mx-2 w-5 h-5' src="./src/assets/heart.png" alt="heart image" /> by Vimal</p>
    </div>
  )
}

export default Footer
