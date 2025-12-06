"use client"
import React, { useActionState, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { userProfileDB } from '@/actions/UserData'

function Navbar() {
    const { data: session, status } = useSession()
    const [showDropdown, setShowDropdown] = React.useState(false);
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();

    const handleSignOut = () => {
        console.log("Signing out...")
        signOut()
        console.log("User signed out")
        setShowDropdown(false)
    }

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profile = await userProfileDB(session?.user?.email)
            setUserEmail(profile.email)
        }
        
        if (status === 'authenticated') {
            fetchUserProfile()
        }

    }, [session, status])

    return (
        <nav className='text-white px-8 flex justify-between items-center py-2 bg-blue-950 border-b border-gray-600'>
            <div className='flex gap-3 items-center'>
                {/* <img src="./public/codingMonkey.gif" alt="" /> */}
                <img src="./program.gif" width={40} alt="codingmonkey" className='cursor-pointer' />
                <Link href={"/"}><h2 className='text-2xl font-bold'>MakeMeToCode</h2></Link>
            </div>
            <div className='flex items-center gap-4'>
                <div className='relative *:cursor-pointer'>

                    <button onClick={() => { setShowDropdown(!showDropdown) }} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700" type="button">welcome {session ? session.user.name : "Guest"}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div id="dropdownInformation" onMouseLeave={() => setTimeout(() => { setShowDropdown(false) }, 200)} onClick={() => setTimeout(() => { setShowDropdown(false) }, 200)} className={`absolute ${!showDropdown && "hidden"}  top-12 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className='font-normal'> Signed in as </div>
                            {session ? <div className="font-medium truncate">{userEmail}</div> : <div>Guest</div>}
                        </div>
                        {!session && <Link href="/login"><div className="py-2">
                            <button onClick={() => setTimeout(() => { setShowDropdown(false) }, 200)} className=" w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign in</button>
                        </div></Link>}
                        {session &&
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={"/profile"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                                </li>
                            </ul>}
                        {session && <div className="py-2">
                            <button onClick={() => handleSignOut().then(() => setTimeout(() => { setShowDropdown(false) }, 200))} type="button" className="text-left px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
                        </div>}
                    </div>

                </div>
                {session && <button onClick={() => { handleSignOut() }} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">Logout</button>}
                {!session && <Link href="/login">
                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer">LogIn</button>
                </Link>}
            </div>
        </nav>
    )
}

export default Navbar
