"use client"
import React from 'react'

function Slide_4() {
    return (
        <>
            <div className="bg-[#e8efd6] min-h-screen flex items-center justify-center">
                <div className="flex w-[90vw] mx-auto py-30">
                    <div className="image-container w-[45vw]">
                        <img src="/image_4.png" className="w-140 mx-auto" />
                    </div>
                    <div className="hero flex flex-col justify-center items-center w-[45vw]">
                        <p className="text-[#1e2330] text-6xl font-[900]">Create and customize your Linktree in minutes</p>
                        <p className="text-[neutral-950] my-6 text-[20px]">Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
                        <div className="flex gap-2 justify-start w-full mt-4">
                            <button className="bg-[#e9c0e9] hover:bg-[#dba8db] font-bold text-neutral-950 p-5 px-18 rounded-full cursor-pointer"> Get started for free </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide_4
