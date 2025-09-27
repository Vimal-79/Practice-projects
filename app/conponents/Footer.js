import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className='flex flex-col px-15'>
                <div className="flex justify-between py-10 *:w-full">
                    <div className=" flex-col">
                        <div className=" text-2xl font-semibold py-5">Company</div>
                        <div className=" flex flex-col text-[14px] text-neutral-600 *:my-2 *:cursor-pointer">
                            <Link href="/blog" className="footer-link">The Linktree Blog</Link>
                            <Link href="https://linktr.ee/blog/engineering/" className="footer-link">Engineering Blog</Link>
                            <Link href="/marketplace/" className="footer-link">Marketplace</Link>
                            <Link href="https://app.getbeamer.com/linktree/en" className="footer-link">What's New</Link>
                            <Link href="/s/about" className="footer-link">About</Link>
                            <Link href="/s/about/press" className="footer-link">Press</Link>
                            <Link href="/s/about/careers" className="footer-link">Careers</Link>
                            <Link href="https://linktr.ee/link-in-bio/" className="footer-link">Link in Bio</Link>
                            <Link href="/s/about/social-good" className="footer-link">Social Good</Link>
                            <Link href="/s/about/contact" className="footer-link">Contact</Link>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="text-2xl font-semibold py-5">Community</div>
                        <div className=" flex flex-col text-[14px] text-neutral-600 *:my-2 *:cursor-pointer">
                            <Link href="/s/about/enterprise" className="footer-link">Linktree for Enterprise</Link>
                            <Link href="https://linktr.ee/creator-report-23" className="footer-link">2023 Creator Report</Link>
                            <Link href="https://linktr.ee/creator-report/" className="footer-link">2022 Creator Report</Link>
                            <Link href="/s/about/charities" className="footer-link">Charities</Link>
                            <Link href="https://linktr.ee/discover/trending/" className="footer-link">What's Trending</Link>
                            <Link href="https://linktr.ee/discover/profile-directory/" className="footer-link">Creator Profile Directory</Link>
                            <Link href="/s/templates" className="footer-link">Explore Templates</Link>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="text-2xl font-semibold py-5">Support</div>
                        <div className=" flex flex-col text-[14px] text-neutral-600 *:my-2 *:cursor-pointer">
                            <Link href="https://linktr.ee/help" className="footer-link">Help Topics</Link>
                            <Link href="https://help.linktr.ee/collections/3020860-getting-started-with-linktree" className="footer-link">Getting Started</Link>
                            <Link href="/s/join-linktree-pro-for-free" className="footer-link">Linktree Pro</Link>
                            <Link href="https://help.linktr.ee/collections/7058291-how-to-s" className="footer-link">Features &amp; How-Tos</Link>
                            <Link href="https://linktr.ee/help" className="footer-link">FAQs</Link>
                            <Link href="/s/about/trust-center/report" className="footer-link">Report a Violation</Link>
                        </div>
                    </div>

                    <div className="flex-col">
                        <div className="text-2xl font-semibold py-5">Trust &amp; Legal</div>
                        <div className=" flex flex-col text-[14px] text-neutral-600 *:my-2 *:cursor-pointer">
                            <Link href="/s/terms" className="footer-link">Terms &amp; Conditions</Link>
                            <Link href="/s/privacy" className="footer-link">Privacy Notice</Link>
                            <Link href="/s/about/cookie-notice" className="footer-link">Cookie Notice</Link>
                            <Link href="/s/about/trust-center" className="footer-link">Trust Center</Link>
                            <Link href="#" className="footer-link ot-sdk-show-settings">Cookie Preferences</Link>
                            <Link href="/s/transparency-report/january-june-2024" className="footer-link">Transparency Report</Link>
                            <Link href="/s/about/trust-center/law-enforcement-access-request-policy" className="footer-link">Law Enforcement Access Policy</Link>
                        </div>
                    </div>

                </div>

                <div className='flex justify-between h-16 items-center'>
                    <div className='flex gap-2 items-center '>
                        <Link href="/login" className='p-4 px-6 font-semibold bg-neutral-300/40 rounded-md hover:bg-neutral-300/50'>Log in</Link>
                        <Link href="/signup" className='bg-[#d2e823] text-[18px] text-neutral-800 font-bold p-4 px-6 rounded-full'>Get stated for free</Link>
                    </div>
                    <div className='flex gap-2 '>
                        <Link href="/" className=''>
                            <svg className='fill-white w-40 h-full bg-[#1e2330] px-7 py-4 rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 26">
                                <path d="m29.91 10.25-4.48 12.42h2l1.14-3.35h4.73l1.14 3.35h2.04L32 10.25H29.9zm-.85 7.52 1.85-5.45h.05l1.85 5.45h-3.75zm13.29-4.25a3.21 3.21 0 0 0-2.88 1.6h-.04v-1.5h-1.8v12.05h1.86v-4.49h.04a3.07 3.07 0 0 0 2.85 1.59c2.27 0 3.78-1.81 3.78-4.62s-1.51-4.63-3.81-4.63zm-.5 7.67c-1.41 0-2.37-1.22-2.37-3.05 0-1.8.96-3.03 2.38-3.03 1.44 0 2.39 1.2 2.39 3.03 0 1.86-.95 3.05-2.4 3.05zm10.46-7.67a3.2 3.2 0 0 0-2.88 1.6h-.03v-1.5h-1.8v12.05h1.85v-4.49h.05a3.07 3.07 0 0 0 2.85 1.59c2.27 0 3.78-1.81 3.78-4.62s-1.52-4.63-3.82-4.63zm-.49 7.67c-1.42 0-2.37-1.22-2.37-3.05 0-1.8.95-3.03 2.37-3.03 1.45 0 2.4 1.2 2.4 3.03 0 1.86-.95 3.05-2.4 3.05zm18.51-2.09c0 2.32-1.85 3.78-4.79 3.78-2.75 0-4.61-1.42-4.73-3.67h1.9c.14 1.23 1.33 2.04 2.97 2.04 1.56 0 2.7-.8 2.7-1.92 0-.96-.69-1.54-2.3-1.93l-1.6-.4c-2.29-.54-3.35-1.6-3.35-3.34 0-2.14 1.87-3.61 4.52-3.61 2.63 0 4.43 1.47 4.49 3.61h-1.88c-.11-1.24-1.14-1.99-2.63-1.99-1.5 0-2.52.76-2.52 1.86 0 .88.65 1.4 2.25 1.8l1.37.33c2.55.6 3.6 1.62 3.6 3.44zm4.02-5.48h1.72v1.47h-1.72v5c0 .77.34 1.13 1.1 1.13.2 0 .4-.02.61-.04v1.46c-.34.06-.68.09-1.03.08-1.83 0-2.55-.68-2.55-2.44v-5.19h-1.31v-1.47h1.31v-2.14h1.87v2.14zm7-.11c-2.6 0-4.28 1.79-4.28 4.64 0 2.85 1.66 4.64 4.29 4.64s4.3-1.79 4.3-4.64c0-2.85-1.68-4.64-4.3-4.64zm0 7.74c-1.5 0-2.4-1.14-2.4-3.1 0-1.95.9-3.11 2.4-3.11 1.52 0 2.41 1.15 2.41 3.1 0 1.97-.9 3.11-2.4 3.11zm9.83-7.73c.21 0 .43.03.64.07v1.74a2.56 2.56 0 0 0-.84-.11 1.87 1.87 0 0 0-1.93 2.08v5.37h-1.86v-9.05h1.77v1.54H89a2.16 2.16 0 0 1 2.18-1.64zm9.3 5.09v-.64c0-2.74-1.57-4.46-4.07-4.46-2.55 0-4.2 1.84-4.2 4.68 0 2.83 1.64 4.6 4.28 4.6 2.04 0 3.64-1.13 3.9-2.78h-1.77a2.04 2.04 0 0 1-2.1 1.28 2.37 2.37 0 0 1-2.43-2.57v-.11h6.4zm-6.2-2.18A2.3 2.3 0 0 1 96.4 15a2.2 2.2 0 0 1 2.09 1.42c.1.28.15.58.13.88H94.1c0-.3.06-.6.18-.88zM31.64 3.87A2.63 2.63 0 0 0 28.83.91h-2.16v5.96h2.16c1.77 0 2.8-1.1 2.8-3zM27.6 6.03V1.75h1.12a1.89 1.89 0 0 1 1.97 2.13 1.87 1.87 0 0 1-1.97 2.15H27.6zm8.78-3.05a2.13 2.13 0 0 0-3.7 1.64 2.14 2.14 0 0 0 2.13 2.34 2.12 2.12 0 0 0 2.12-2.34 2.14 2.14 0 0 0-.55-1.64zm-1.57 3.2c-.78 0-1.21-.57-1.21-1.56 0-.97.43-1.55 1.2-1.55.78 0 1.22.58 1.22 1.55 0 .98-.44 1.55-1.21 1.55zm4 .7-1.24-4.5h.9l.8 3.43h.07l.93-3.44h.85l.93 3.44h.07l.8-3.44h.9l-1.24 4.5h-.93l-.93-3.31h-.07l-.92 3.31h-.92zm8.98-2.7c0-.72-.31-1.08-.97-1.08a1.03 1.03 0 0 0-1.03.7c-.05.14-.06.3-.05.44v2.63h-.89v-4.5h.86v.72h.07a1.35 1.35 0 0 1 1.34-.8 1.48 1.48 0 0 1 1.5 1.02c.07.21.09.43.06.65v2.91h-.89V4.18zm3.2 2.7h-.9V.6h.9v6.26zm4.93-3.9a2.13 2.13 0 0 0-3.7 1.64 2.14 2.14 0 0 0 2.12 2.34 2.12 2.12 0 0 0 2.12-2.34 2.15 2.15 0 0 0-.54-1.64zm-1.58 3.2c-.77 0-1.2-.57-1.2-1.56 0-.97.43-1.55 1.2-1.55s1.21.58 1.21 1.55c0 .98-.44 1.55-1.2 1.55zm6.84.7V3.8c0-.95-.63-1.52-1.76-1.52-1.02 0-1.75.5-1.84 1.27h.86c.1-.31.44-.5.93-.5.61 0 .93.27.93.75v.39l-1.22.07c-1.07.06-1.68.53-1.68 1.34a1.36 1.36 0 0 0 1.5 1.35 1.52 1.52 0 0 0 1.36-.7h.07v.63h.85zm-.88-1.66a1.08 1.08 0 0 1-.38.74c-.1.09-.23.16-.37.2-.13.04-.28.05-.42.04-.48 0-.83-.24-.83-.64s.28-.6.9-.65l1.1-.07v.38zm3.92 1.73a1.57 1.57 0 0 0 1.41-.79h.07v.71h.85V.61h-.89V3.1h-.06a1.48 1.48 0 0 0-1.38-.8c-1.14 0-1.87.9-1.87 2.33 0 1.43.72 2.33 1.87 2.33zm.25-3.85c.74 0 1.21.59 1.21 1.53 0 .94-.46 1.52-1.21 1.52s-1.2-.57-1.2-1.53c0-.95.45-1.52 1.2-1.52zm7.88 3.86a2.12 2.12 0 0 0 2.13-2.34 2.14 2.14 0 0 0-2.99-2.15 2.13 2.13 0 0 0-1.26 2.15 2.14 2.14 0 0 0 2.12 2.34zm-1.2-2.34c0-.97.43-1.55 1.2-1.55.78 0 1.21.58 1.21 1.55 0 .98-.43 1.55-1.2 1.55-.78 0-1.21-.57-1.21-1.55zm6.05-1.45a1.05 1.05 0 0 0-.6.63c-.04.14-.06.3-.04.44v2.63h-.89v-4.5h.85v.72h.07a1.35 1.35 0 0 1 1.34-.8 1.48 1.48 0 0 1 1.51 1.02c.07.21.09.43.05.65v2.91h-.89V4.18c0-.72-.31-1.08-.97-1.08-.14 0-.3.02-.43.07zm6.43-.03h-.72v-.75h.72V1.25h.89v1.14h.97v.75h-.97v2.31c0 .48.2.68.63.68.12 0 .23 0 .34-.02v.74a2.8 2.8 0 0 1-.48.05c-.99 0-1.38-.35-1.38-1.22V3.14zm3.96 3.73h-.89V.61h.89V3.1h.07a1.38 1.38 0 0 1 1.37-.8 1.48 1.48 0 0 1 1.55 1.68v2.9h-.89V4.2c0-.72-.34-1.09-.96-1.09a1.03 1.03 0 0 0-.84.31 1.05 1.05 0 0 0-.3.83v2.63zm4.21-1.36a2.06 2.06 0 0 0 2.01 1.45 1.83 1.83 0 0 0 1.95-1.3h-.85a1.08 1.08 0 0 1-1.07.55 1.2 1.2 0 0 1-1.14-.8 1.19 1.19 0 0 1-.06-.5v-.04h3.18v-.31c0-1.42-.76-2.27-2.01-2.27a2.08 2.08 0 0 0-2.08 2.35c-.04.3-.02.59.07.87zm.92-1.75a1.16 1.16 0 0 1 1.52-.64 1.09 1.09 0 0 1 .67 1.09h-2.27c0-.16.02-.3.08-.45zM19.03 16.64a11.4 11.4 0 0 1-1.58 3.22c-.93 1.39-1.9 2.75-3.45 2.77-1.5.04-2-.88-3.73-.88-1.74 0-2.28.86-3.72.92-1.48.05-2.6-1.49-3.57-2.87C1.05 17-.45 11.87 1.57 8.4a5.53 5.53 0 0 1 4.65-2.84c1.47-.03 2.84 1 3.75 1 .89 0 2.58-1.23 4.33-1.04a5.28 5.28 0 0 1 4.15 2.24A5.15 5.15 0 0 0 16 12.07a4.97 4.97 0 0 0 3.03 4.57zm-7.37-11.8c-.59.27-1.22.41-1.87.4a4.83 4.83 0 0 1 1.19-3.49A5.16 5.16 0 0 1 14.32.02a5.07 5.07 0 0 1-1.16 3.63c-.4.5-.92.91-1.5 1.19z"></path>
                            </svg>
                        </Link>

                        <Link href="/">
                            <svg className='w-40 h-full bg-[#1e2330] px-8 py-4 fill-white rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 29">
                                <linearGradient x1="11.83" y1="27.05" x2="-4.96" y2="10.27" gradientTransform="matrix(1 0 0 -1 0 30)">
                                    <stop offset="0" style={{ stopColor: 'rgb(0, 160, 255)' }}></stop>
                                    <stop offset="0.01" style={{ stopColor: 'rgb(0, 161, 255)' }}></stop>
                                    <stop offset="0.26" style={{ stopColor: 'rgb(0, 190, 255)' }}></stop>
                                    <stop offset="0.51" style={{ stopColor: 'rgb(0, 210, 255)' }}></stop>
                                    <stop offset="0.76" style={{ stopColor: 'rgb(0, 223, 255)' }}></stop>
                                    <stop offset="1" style={{ stopColor: 'rgb(0, 227, 255)' }}></stop>
                                </linearGradient>
                                <path fill="#00d0ff" d="M.5 1.8c-.3.3-.5.8-.5 1.4v22.1c0 .6.2 1.1.5 1.4l.1.1L13 14.4v-.2L.5 1.8z"></path>
                                <linearGradient id="play-b" gradientUnits="userSpaceOnUse" x1="23.86" y1="15.76" x2="-0.33" y2="15.76" gradientTransform="matrix(1 0 0 -1 0 30)">
                                    <stop offset="0" style={{ stopColor: 'rgb(255, 224, 0)' }}></stop>
                                    <stop offset="0.41" style={{ stopColor: 'rgb(255, 189, 0)' }}></stop>
                                    <stop offset="0.78" style={{ stopColor: 'rgb(255, 165, 0)' }}></stop>
                                    <stop offset="1" style={{ stopColor: 'rgb(255, 156, 0)' }}></stop>
                                </linearGradient>
                                <path fill="#ffca00" d="M17.1 18.5 13 14.4v-.2l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.6z"></path>
                                <linearGradient id="play-c" gradientUnits="userSpaceOnUse" x1="14.85" y1="13.46" x2="-7.9" y2="-9.29" gradientTransform="matrix(1 0 0 -1 0 30)">
                                    <stop offset="0" style={{ stopColor: 'rgb(255, 58, 68)' }}></stop>
                                    <stop offset="1" style={{ stopColor: 'rgb(195, 17, 98)' }}></stop>
                                </linearGradient>
                                <path fill="#f1304a" d="m17.1 18.5-4.2-4.2L.5 26.7c.5.5 1.2.5 2.1.1l14.5-8.3z"></path>
                                <linearGradient id="play-d" gradientUnits="userSpaceOnUse" x1="-2.67" y1="35.58" x2="7.49" y2="25.42" gradientTransform="matrix(1 0 0 -1 0 30)">
                                    <stop offset="0" style={{ stopColor: 'rgb(50, 160, 113)' }}></stop>
                                    <stop offset="0.07" style={{ stopColor: 'rgb(45, 167, 113)' }}></stop>
                                    <stop offset="0.48" style={{ stopcolor: 'rgb(21, 207, 116)' }}></stop>
                                    <stop offset="0.8" style={{ stopColor: 'rgb(6, 231, 117)' }}></stop>
                                    <stop offset="1" style={{ stopColor: 'rgb(0, 240, 118)' }}></stop>
                                </linearGradient>
                                <path fill="#00f076" d="M17.1 10 2.5 1.7c-.8-.5-1.6-.4-2 .1L13 14.3l4.1-4.3z"></path>
                                <path opacity="0.2" d="M17.1 18.4 2.5 26.6c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0l14.6-8.4z"></path>
                                <path opacity="0.12" d="M.5 26.6c-.3-.4-.5-.8-.5-1.4v.1c0 .6.2 1.1.5 1.4v-.1zM22 15.5l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.3 1-1 1.3z"></path>
                                <path opacity="0.25" d="m2.5 1.9 19.5 11c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L2.5 1.7C1.1.9 0 1.6 0 3.2v.1c0-1.6 1.1-2.2 2.5-1.4z"></path>
                                <path d="m115.9 16.1-5.1 11.8h-1.9l1.9-4.2-3.3-7.6h2l2.2 5.4h.1l2.1-5.4h2zm-20-.6c0 2.4-2 3.9-4.1 3.9h-2.6v4.7h-1.9V11.6h4.5c2.1 0 4.1 1.5 4.1 3.9zm-1.8 0c0-1-.8-2.1-2.2-2.1h-2.7v4.3h2.7c1.4 0 2.2-1.2 2.2-2.2zm13.1 3.8v4.8h-1.8v-1h-.1c-.4.7-1.1 1.2-2.4 1.2-1.6 0-3.1-1.1-3.1-2.8 0-1.8 1.8-2.8 3.6-2.8.9 0 1.6.3 1.9.5v-.1c0-1-1-1.6-2-1.6-.7 0-1.4.2-1.7.9l-1.7-.7c.6-1.3 2-1.9 3.3-1.9 2.4.1 4 1.3 4 3.5zm-1.8 1.4c-.5-.2-.9-.4-1.7-.4-.9 0-2 .4-2 1.3 0 .8.9 1.1 1.5 1.1 1.1 0 2.1-.8 2.2-2zm-52.3-.6c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.8-4.3-4.3 1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3zm-1.8 0c0-1.5-1.1-2.6-2.4-2.6-1.3 0-2.4 1-2.4 2.6 0 1.5 1.1 2.6 2.4 2.6s2.4-1.1 2.4-2.6zm-13.5-2.9V19h4.3c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8a4.72 4.72 0 0 1 8-3.5l1.3-1.3a6.4 6.4 0 0 0-4.5-1.8c-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm24.6 2.9c0 2.4-1.9 4.3-4.3 4.3a4.2 4.2 0 0 1-4.3-4.3c0-2.5 1.9-4.3 4.3-4.3 2.4.1 4.3 1.9 4.3 4.3zm-1.8 0c0-1.5-1.1-2.6-2.4-2.6s-2.4 1-2.4 2.6c0 1.5 1.1 2.6 2.4 2.6s2.4-1.1 2.4-2.6zm22.7-1-5.7 2.4c.4.9 1.1 1.3 2.1 1.3s1.6-.5 2.1-1.2l1.5 1a4.18 4.18 0 0 1-7.7-2.4c0-2.5 1.8-4.3 4-4.3s3.3 1.8 3.6 2.7l.1.5zm-2.2-.7c-.2-.5-.8-.9-1.6-.9-1 0-2.3.8-2.2 2.5l3.8-1.6zM97 24.1h1.9V11.6H97v12.5zm-24.3 0h1.9V11.6h-1.9v12.5zm-3.1-8h1.8v7.6c0 3.1-1.9 4.4-4 4.4s-3.3-1.4-3.8-2.5l1.6-.7c.3.7 1 1.5 2.1 1.5 1.4 0 2.3-.9 2.3-2.5v-.6h-.1c-.4.5-1.2 1-2.2 1-2.1 0-4.1-1.9-4.1-4.2 0-2.4 1.9-4.3 4.1-4.3 1 0 1.8.5 2.2 1h.1v-.7zm.1 4c0-1.5-1-2.6-2.3-2.6-1.3 0-2.4 1.1-2.4 2.6s1.1 2.6 2.4 2.6c1.3 0 2.3-1.1 2.3-2.6zM59.3 6.4c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.7 1.3-1 2.2-1 .9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9-.9.1-1.6-.2-2.2-.8zm-.1-2.2c0 .7.2 1.3.7 1.7.4.5 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.5-1-.7-1.6-.7s-1.2.2-1.6.7c-.5.4-.7 1-.7 1.7zM34.5 7.3c.9 0 1.6-.3 2.2-.9.5-.5.7-1.2.7-2v-.5h-2.9v.7h2.2c0 .5-.2.9-.5 1.2-.4.4-1 .7-1.7.7-.6 0-1.2-.2-1.6-.7-.5-.4-.7-1-.7-1.7s.2-1.3.7-1.7c.5-.4 1-.7 1.6-.7.7 0 1.2.2 1.6.7l.6-.4c-.2-.3-.5-.5-.9-.7-.4-.2-.8-.3-1.3-.3-.9 0-1.6.3-2.2.9-.6.6-.9 1.3-.9 2.2 0 .9.3 1.6.9 2.2.6.7 1.4 1 2.2 1zm7.6-.9h-2.7V4.5h2.5v-.7h-2.5V1.9h2.7v-.7h-3.5v6h3.5v-.8zm3.3.8V1.9H47v-.7h-4.1v.7h1.7v5.3h.8zm5.4-6H50v6h.8v-6zm3.4 6V1.9h1.7v-.7h-4.1v.7h1.7v5.3h.7zm12.2-3.8V2.2l3.1 4.9h.8v-6h-.8v4.7l-2.9-4.7h-.9v6h.8V3.4z"></path>
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
