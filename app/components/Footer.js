import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='text-white p-8 bg-gray-950 border-t border-gray-400 w-full flex items-center justify-between'>
      <div className='flex flex-col'>
        <span> Copyright © 2025 Make Me To Code | All rights reserved!</span>
        <span className='text-gray-400'>created by Vimal with ❤️</span>
      </div>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h3>Follow me on </h3>
        <div className='flex gap-3'>
          <Link target="_blank" href={"https://github.com/Vimal-79"} className=' flex gap-2 items-center bg-transparent border border-gray-400 text-white px-4 py-2 rounded-full'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path>
            </svg>
            <span className='text-sm font-medium h-5'>GitHub</span>
          </Link>
          <Link target="_blank" href={"https://github.com/Vimal-79"} className=' flex gap-2 items-center bg-transparent border border-gray-400 text-white px-4 py-2 rounded-full'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"></path><path d="M1 6h3v9h-3v-9z"></path>
              <path d="M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
            </svg>
            <span className='text-sm font-medium h-4'>LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
