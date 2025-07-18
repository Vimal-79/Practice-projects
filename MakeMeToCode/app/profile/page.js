"use client"
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { userProfileDB } from '@/actions/UserData'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function page() {
  const router = useRouter()
  const { data: session, status } = useSession();
  const [username, setUsername] = useState();
  const [profileImage, setProfileImage] = useState();
  const [coverImage, setCoverImage] = useState();
  // const [description, setDescription] = useState();

  const getUserDetails = async () => {
    if (session) {
      const a = await userProfileDB(session.user.email)
      setUsername(a.username)
      setProfileImage(a.profileImage)
      setCoverImage(a.coverImage)
    }
  }

  useEffect(() => {
    
    if (status === 'authenticated') {
      getUserDetails()
    }

    if (status === 'unauthenticated') {
      router.replace("/")
    }

  }, [session])

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (status === 'authenticated') {
    return (
      <>
        <div className="h-[60vh] relative bg-gray-800/70 ">
          <Link href="/dashboard" className='absolute z-20 bg-neutral-950/50 rounded-lg text-white px-3 py-1 top-3 right-3 hover:bg-neutral-950/90 cursor-pointer'> Edit </Link>
          <img className='object-cover select-none w-full h-full border object-[0_80%] border-gray-400' src={coverImage && coverImage} alt="" />
          <div className='absolute w-25 h-25 rounded-md border border-gray-400 overflow-hidden left-1/2 translate-x-[-50%] top-full translate-y-[-50%]'>
            <img className='object-cover select-none' src={profileImage ? profileImage : "./default_profile_image.jpg"} alt="" />
          </div>
        </div>
        <div className="mt-15 flex flex-col items-center justify-center ">

          <h1 className='text-2xl font-bold text-white'>{username}</h1>
          <p className='text-white text-[12px]'>Welcome to your profile page!</p>
          <div className='flex py-2 gap-5 mt-8 *:cursor-pointer '>
            <span aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" fill='#A1A1AA' width="30" height="30" viewBox="0 0 50 50">
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#A1A1AA' width="30" height="30" viewBox="0 0 48 48">
                <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#A1A1AA' width="30" height="30" viewBox="0 0 24 24">
                <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div className='w-full border-2 border-gray-500/20 my-4'></div>

        <div className='flex w-[70%] mx-auto justify-between gap-2'>
          <div className='bg-blue-950/70 w-full rounded-md min-h-70 text-white py-3 mt-10 mb-20'>
            <h3 className='font-bold text-2xl text-center'>supporters</h3>
          </div>
        </div>
      </>
    )
  }

}

export default page
