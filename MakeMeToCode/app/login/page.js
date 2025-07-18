"use client"
import React, { lazy, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
// import { redirect } from 'next/dist/server/api-utils'


function page() {
    const { data: session, status } = useSession()
    const router = useRouter();

    useEffect(() => {
        console.log(status)
        if (status === 'authenticated') {
            router.replace("/dashboard")
        }
    }, [session])

    if (status === 'loading') {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="text-white text-xl">loading...</div>
            </div>
        )
    }

    if (status === 'unauthenticated') {

        return (
            <>
                <div className=' py-18 absolute h-fit w-180 right-1/2 translate-x-1/2 backdrop-blur-[1.2px] border-2 border-gray-300/20 rounded-md'>
                    <h1 className='text-white text-3xl text-center mb-14 font-bold'>Login To Get Your Fans Support You</h1>
                    <div className='absolute right-3 top-3 cursor-pointer'>
                        <Link href={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="gray" width={20} viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

                        </Link>
                    </div>
                    <div className='flex flex-col gap-3 mx-auto w-fit mt-4 *:cursor-pointer *:flex *:gap-3'>
                        <button type="button" className="text-black w-58 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Sign in with Google
                        </button>
                        <button type="button" className="text-black w-58 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" fill="#3b5998" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"></path>
                            </svg>
                            Sign in with Facebook
                        </button>
                        <button type="button" className="text-black w-58 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                            </svg>
                            Sign in with X
                        </button>
                        <button type="button" onClick={() => { signIn("github") }} className="text-black w-58 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48">
                                <path d="M44,24c0,8.96-5.88,16.54-14,19.08V38c0-1.71-0.72-3.24-1.86-4.34c5.24-0.95,7.86-4,7.86-9.66c0-2.45-0.5-4.39-1.48-5.9 c0.44-1.71,0.7-4.14-0.52-6.1c-2.36,0-4.01,1.39-4.98,2.53C27.57,14.18,25.9,14,24,14c-1.8,0-3.46,0.2-4.94,0.61 C18.1,13.46,16.42,12,14,12c-1.42,2.28-0.84,4.74-0.3,6.12C12.62,19.63,12,21.57,12,24c0,5.66,2.62,8.71,7.86,9.66 c-0.67,0.65-1.19,1.44-1.51,2.34H16c-1.44,0-2-0.64-2.77-1.68c-0.77-1.04-1.6-1.74-2.59-2.03c-0.53-0.06-0.89,0.37-0.42,0.75 c1.57,1.13,1.68,2.98,2.31,4.19C13.1,38.32,14.28,39,15.61,39H18v4.08C9.88,40.54,4,32.96,4,24C4,12.95,12.95,4,24,4 S44,12.95,44,24z"></path>
                            </svg>
                            Sign in with Github
                        </button>

                        <button type="button" className="text-black w-58 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                            <svg xmlnsXlink="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
                                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                            </svg>
                            Sign in with Apple
                        </button>
                    </div>
                </div>

            </>
        )
    }
}

export default page
