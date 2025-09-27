"use client"
import React from 'react'

function Slide_1() {
    return (
        <>
            <div className="bg-[#254f1a] min-h-screen flex items-center justify-center">
                <div className="flex w-[90vw] mx-auto py-60">
                    <div className="hero flex flex-col justify-center items-center w-[45vw]">
                        <p className="text-[#d2e823] text-7xl font-[900]">Everything you are. In one, simple link in bio.</p>
                        <p className="text-neutral-200 my-6 text-[20px]">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
                        <div className="flex gap-2 justify-start w-full mt-4">
                            <input className="bg-gray-200 p-4 font-bold rounded-md w-80" type="text" placeholder="Enter you handle" />
                            <button className="bg-[#e9c0e9] font-bold text-neutral-800 p-5 px-8 rounded-full"> Claim your Linktree</button>
                        </div>
                    </div>
                    <div className="image-container w-[45vw]">
                        <img src="/image_1.png" className="w-120 mx-auto" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide_1
