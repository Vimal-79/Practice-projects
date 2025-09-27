"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

function page() {

    const [email, setEmail] = useState('')

    return (
        <>
            <div className='flex '>
                <div className='w-1/2 px-10 py-10 h-screen overflow-y-auto relative'>
                    <div>
                        <Link href="/" className='fixed'>
                            <svg className='block w-40 px-2 my-2' viewBox="0 0 80 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <title>Linktree Logo</title>
                                <desc>Linktree Logo Symbol and Word Mark</desc>
                                <path d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z" fill="#000000"></path><path d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z" fill="#43E660"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center mx-auto mt-20 mb-10 max-w-120'>
                        <h1 className='text-4xl font-bold mt-10'>Welcome back</h1>
                        <p className='text-gray-500 my-2'>Log in to your Linktree</p>
                        <div className=' flex flex-col w-full mt-10 gap-2'>
                            <input value={email} onChange={e => setEmail(e.target.value)} className='bg-gray-100 px-4 py-3 w-full rounded-xl' type='text' placeholder='Email or username' />
                            <button className='bg-neutral-950 px-4 py-3 w-full text-white rounded-xl font-bold hover:bg-neutral-950/80 cursor-pointer'>Continue</button>
                        </div>
                        <p className='my-4 text-gray-400'>OR</p>
                        <div className='w-full flex flex-col gap-2'>
                            <button className='bg-white flex gap-2 justify-center items-center border border-gray-400/40 hover:border-gray-400/0 px-4 py-3 w-full font-bold text-neutral-950 rounded-xl hover:bg-gray-400/10 cursor-pointer'>
                                <svg className='w-4 h-fit' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <span>Continue with Google</span>
                            </button>
                            <button className='bg-white flex gap-2 justify-center items-center border border-gray-400/40 hover:border-gray-400/0 px-4 py-3 w-full font-bold text-neutral-950 rounded-xl hover:bg-gray-400/10 cursor-pointer'>
                                <svg className='w-4 h-fit' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                                </svg>
                                <span>Continue with Apple</span>
                            </button>
                            <button className='bg-white flex gap-2 justify-center items-center border border-gray-400/40 hover:border-gray-400/0 px-4 py-3 w-full font-bold text-neutral-950 rounded-xl hover:bg-gray-400/10 cursor-pointer'>
                                <svg className='w-4 h-fit' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" >
                                    <path d="M5 3.75C5 3.35218 5.15804 2.97064 5.43934 2.68934C5.72064 2.40804 6.10218 2.25 6.5 2.25H12.5C12.8978 2.25 13.2794 2.40804 13.5607 2.68934C13.842 2.97064 14 3.35218 14 3.75V14.25C14 14.6478 13.842 15.0294 13.5607 15.3107C13.2794 15.592 12.8978 15.75 12.5 15.75H6.5C6.10218 15.75 5.72064 15.592 5.43934 15.3107C5.15804 15.0294 5 14.6478 5 14.25V3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M8.75 3H10.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M9.5 12.75V12.7575" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Continue with Phone Number</span>
                            </button>
                        </div>
                        <div className='my-10 flex flex-col items-center gap-5'>
                            <span className='flex *:text-[14px]'>
                                <Link href="/" className='text-[#8129d9] font-bold'>Forget password?</Link>
                                <li className='list-disc ml-5 font-extrabold'></li>
                                <Link href="/" className='text-[#8129d9] font-bold'>Forget username?</Link>
                            </span>
                            <span className='text-gray-400'>Don't have an account? <Link href="/signup" className='text-[#8129d9] text-[14px] '>Sign up</Link></span>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-screen overflow-hidden'>
                    <img className='w-full object-cover mt-[-50%]' src="https://assets.production.linktr.ee/auth/3448/media/banner-login-desktop.f355be949b508c58ec2d.webp" alt="Login banner" />
                </div>

            </div>
        </>
    )
}

export default page
