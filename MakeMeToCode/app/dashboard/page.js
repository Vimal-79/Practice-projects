"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { userProfileDB } from '@/actions/UserData'
import { useRouter } from 'next/navigation'
import POST from '@/actions/UserActions'

function page() {
  const { data: session, status } = useSession();
  // const [username , setUsername] = useState();
  // const [name , setName] = useState();
  // const [email , setEmail] = useState();
  const refusername = useRef()
  const refname = useRef()
  const refemail = useRef()

  const router = useRouter();
  const [profilePreview, setProfilePreview] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);


  const fetcData = async () => {
    if (session) {
      await userProfileDB(session.user.email).then((a) => {
        if (!refname.current.value) refname.current.value = a.name
        if (!refusername.current.value) refusername.current.value = a.username
        if (!refemail.current.value) refemail.current.value = a.email
        if (!profilePreview) setProfilePreview(a.profileImage)
        if (!coverPreview) setCoverPreview(a.coverImage)
      })
    }
  }

  const redirectToProfile = () => {
    router.push("/profile")
  }

  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const info = JSON.stringify(session.user.email)
    console.log("save was clicked");
    const data = {
      "name": refname.current.value,
      "username": refusername.current.value,
      "email": refemail.current.value,
      "profileImage": profilePreview,
      "coverImage": coverPreview
    };

    useEffect(() => {
      if (status === 'authenticated') {
        fetcData()
      }

      //redirect to loading page when no sesionm found
      if (status === 'unauthenticated') {
        router.replace("/login")
      }
    }, [session])



    //handle imageupload and preview
    const handleImageUpload = (e, setPreview) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = (e) => {
          setPreview(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }

    // let a = await fetch("/", { method: "POST", header: { "Content-Type": "multipart/form-data" }, body: data })
    // await userProfileDB(session?.user?.email).then(() => {
    // })
    await POST(data, session).then(() => { redirectToProfile() });
  }

  const triggerFileInput = (inputId) => {
    document.getElementById(inputId).click();
  }

  //show loading when session is loading
  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  // Only render dashboard content when authenticated
  if (status === 'authenticated') {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <h1 className='text-3xl font-bold text-white text-center my-4'> Welcome to your Dashboard</h1>
        <div className='form-container mb-10'>
          <form action="" className='*:text-white'>
            <div className='container max-w-150 mx-auto space-y-1'>
              <div className='flex flex-col'>
                <label className='text-lg ' htmlFor="Name"> Name </label>
                <input ref={refname} className='bg-gray-400 rounded-md min-h-8 my-1 px-3 text-black outline-green-400 focus:bg-white' type="text" id="Name" autoComplete='on' />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg ' htmlFor="email"> Email </label>
                <input ref={refemail} className='bg-gray-400 rounded-md min-h-8 my-1 px-3 text-black outline-green-400 focus:bg-white' type="email" id="email" autoComplete='on' />
              </div>
              <div className='flex flex-col'>
                <label className='text-lg' htmlFor="username"> Username </label>
                <input ref={refusername} className='bg-gray-400 rounded-md min-h-8 my-1 px-3 text-black outline-green-400 focus:bg-white' type="text" id="username" autoComplete='on' />
              </div>
              <div className='flex flex-col '>
                <label className='text-lg ' htmlFor="profile_picture"> Profile picture</label>
                <div onClick={() => triggerFileInput("profile_picture")} className='relative bg-gray-400 rounded-md min-h-30 flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-gray-700 transition-colors'>
                  <input onChange={(e) => handleImageUpload(e, setProfilePreview)} className='hidden' type="file" accept="image/*" id="profile_picture" />
                  {profilePreview ? <div className='min-h-30 max-h-120 bg-gray-400 rounded-md '>
                    <img className=' max-h-60 object-contain' src={profilePreview} alt="preview profile image" />
                    <div className='bg-black absolute inset-0 h-full w-full flex items-center justify-center rounded-md opacity-0 hover:opacity-70 transition-opacity'>
                      <span>Click to change</span>
                    </div>
                  </div> :
                    <span>Upload your profile image</span>}
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='text-lg ' htmlFor="cover_picture"> Cover picture</label>
                <div onClick={() => triggerFileInput("cover_picture")} className=' relative bg-gray-400 rounded-md min-h-40 flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-gray-700 transition-colors'>
                  <input onChange={(e) => { handleImageUpload(e, setCoverPreview) }} className='hidden' type="file" accept="image/*" id="cover_picture" />
                  {coverPreview ? <div className='min-h-30 bg-gray-400 rounded-md '>
                    <img className='max-h-80 object-contain' src={coverPreview} alt="preview cover image" />
                    <div className='bg-black absolute inset-0 h-full w-full flex items-center justify-center rounded-md opacity-0 hover:opacity-70 transition-opacity'>
                      <span>Click to change</span>
                    </div>
                  </div> :
                    <span>Upload your cover image</span>}
                </div>
              </div>
              <div className='flex justify-center items-center mt-4'>
                <button onClick={(e) => { handleSubmit(e), showToast("Data saved!") }} className='font-bold cursor-pointer px-4 py-2 rounded-md w-full transition-colors focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 text-md dark:bg-green-600 dark:hover:bg-green-700 '>Save</button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  }

  return null
}

export default page

