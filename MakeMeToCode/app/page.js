"use client"
import React from 'react'
import { useState } from 'react'

function page() {

  return (
    <>
      <div className='text-white py-12'>
        <h2 className='text-3xl font-bold text-center'>MakeMeToCode</h2>
        <p className='text-center text-lg mt-4'>A platform where you can raise funds for your coding projects and connect with like-minded individuals.</p>
        <p className='text-center text-lg mt-4'>Join us today and start bringing your coding ideas to life!</p>
        <div className='flex justify-center mt-8 gap-3 *:border *:border-gray-300/20 *:rounded-md *:py-2 *:px-4 *:cursor-pointer  '>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">Get Started</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">Learn More</button>
        </div>
      </div>

      <div className='border-2 border-gray-300/10 my-12'></div>

      <div className="*:cursor-pointer flex justify-around py-5">
        {<script src="https://cdn.lordicon.com/lordicon.js"></script>}
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='p-3 w-fit bg-white flex justify-center items-center rounded-full'><lord-icon className="bg-white w-15 h-15 rounded-full object-contain" src="https://cdn.lordicon.com/hhljfoaj.json" delay="1000" trigger="loop"></lord-icon></div>
          <p className='text-white'>Fund yourself</p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='p-1 w-fit bg-white flex justify-center items-center rounded-full'><lord-icon className="bg-white w-19 h-19 rounded-full" src="https://cdn.lordicon.com/cukgelaw.json" delay="200" trigger="loop"></lord-icon></div>
          <p className='text-white'>Fund Your favourite Coder</p>
        </div>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <div className='p-3 w-fit bg-white flex justify-center items-center rounded-full'><lord-icon className="bg-white w-15 h-15 rounded-full" src="https://cdn.lordicon.com/xjkryxnf.json" delay="1000" trigger="loop"></lord-icon></div>
          <p className='text-white'>Your fans will support you</p>
        </div>
      </div>

      <div className='border-2 border-gray-300/10 my-6'></div>

      <div className='my-3 flex flex-col items-center justify-center *:text-white space-y-3'>
        <h3 className='text-2xl text-white font-semibold text-center'>Learn More</h3>
        <dl className='mt-4'>
          <dt className='font-semibold text-lg'>Empowering Coders, One Line at a Time</dt>
          <dd className='mb-4'>MakeMeToCode is a platform dedicated to supporting aspiring and underfunded programmers through community-backed fundraising.</dd>

          <dt className='font-semibold text-lg'>Why We Exist</dt>
          <dd className='mb-4'>Thousands of talented coders lack access to essential tools, mentorship, or education. We’re here to bridge that gap by connecting donors with developers who need a lift.</dd>

          <dt className='font-semibold text-lg'>How It Works</dt>
          <dd className='mb-4'>Supporters contribute directly to programmers working on projects, learning to code, or seeking certification—enabling them to grow, build, and thrive in tech.</dd>

          <dt className='font-semibold text-lg'>Transparency and Impact</dt>
          <dd className='mb-4'>Every donation is tracked, every story is shared. We ensure your support makes a visible difference in the coding community.</dd>

          <dt className='font-semibold text-lg'>Join the Movement</dt>
          <dd className='mb-4'>Whether you're a programmer in need or someone who believes in the power of code to change lives, MakeMeToCode is your platform to make an impact.</dd>
        </dl>
      </div>

    </>
  )
}

export default page
