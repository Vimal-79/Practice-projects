import React from 'react'
import Footer from '../Footer'


function Slide_7() {
    return (
        <>
            <div className="bg-[#502274] min-h-screen flex items-center justify-center relative overflow-hidden">
                <img className='w-140 absolute left-10 top-10 rotate-[15deg]' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66710696806e843c0058943b_download.svg" />
                <img className='w-170 absolute right-[-230] top-140 ' src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b365b622379ae753964b8_footer-flower.svg" />
                <div className="flex flex-col items-center w-[90vw] mx-auto pt-40 pb-10 relative">
                    <div>
                        <div className='mt-20'>
                            <p className='text-6xl font-extrabold text-[#e9c0e9] mx-auto text-center max-w-[65vw] mb-10'>Jumpstart your corner of the internet today</p>
                            <div className="flex gap-2 justify-center w-full mt-4">
                                <input className="bg-white p-4 font-bold rounded-md w-70" type="text" placeholder="Enter you handle" />
                                <button className="bg-[#d2e823] font-bold text-neutral-800 p-5 px-8 rounded-full"> Claim your Linktree</button>
                            </div>
                        </div>
                        <div className='bg-white min-h-fit pb-15 w-[90vw] rounded-3xl mt-60 mb-30'>
                            <Footer />
                        </div>
                        <div className='flex gap-10 justify-center'>
                            <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b44696cafd33dbf47aef3_Container.svg" />
                            <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/666b44694653c36473453f36_Container-1.svg" />
                        </div>
                        <p className='mt-10 max-w-[80vw] text-center text-lg text-[#e9c0e9] font-medium'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide_7
