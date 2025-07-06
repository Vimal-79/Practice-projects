import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center max-[500px]:my-4 my-8 max-[500px]:text-[10px]">
        <div className="flex font-extrabold capitalize text-3xl max-[500px]:text-[18px]">
          <span className="text-green-500">&lt;</span>
          pass
          <span className="text-green-500 uppercase">/op&gt;</span>
        </div>
        <p className="text-gray-600">Your own password manager</p>
      </div>
  )
}

export default Hero
