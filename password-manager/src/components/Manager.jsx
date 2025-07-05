"use client"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { ToastContainer, toast } from 'react-toastify';

function Manager() {
    const [data, setData] = useState({
        website: "",
        username: "",
        password: ""
    });

    const [form, setForm] = useState([]);
    const [showpassword, setShowpassword] = useState(false);
    const [eye, setEye] = useState("not-show");

    useEffect(() => {
        let data = localStorage.getItem("password")
        localStorage.getItem("password") && setForm(JSON.parse(data))
    }, [])

    //function for show/hide password inside input
    const handleShowPassword = (e) => {
        showpassword ? setEye((eye) => "not-show") : setEye((eye) => "show");
        setShowpassword((showpassword) => !showpassword);
    }

    //handle save button
    const handlesave = (e) => {
        setForm([...form, { ...data, id: uuidv4() }]) //need to elabutate
        setData({
            website: "",
            username: "",
            password: ""
        })
        toast.success('Password added succesfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }



    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    //handle delete button
    const handledelete = (e, id) => {
        let newForm = form.filter(item => id != item.id)
        let tempusername = form.filter(item => id === item.id)
        confirm(`do you want to delete "${tempusername[0].username}" and its password`) && (setForm(newForm) , toast.success('Password deleted!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }) )
        // savetolocalstorage(newForm)
        
    }

    const handlecopy = (e, text) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                </div>
            </div>
            <div className="inputarea flex flex-col items-center gap-3 w-4/5 mx-auto cursor-pointer">
                <input value={data.website} onChange={handleInput} name="website" className="w-full p-1 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type="text" placeholder="Enter website URL" />
                <div className="flex gap-4 w-full relative">
                    <input value={data.username} name="username" onChange={handleInput} className="w-[70%] p-1 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type="text" placeholder="Enter Username" />
                    <input value={data.password} name="password" onChange={handleInput} className="w-[30%] p-1 pr-10 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type={showpassword ? "text" : "password"} placeholder="Enter password" />
                    <img className="absolute right-3 bottom-1/2 translate-y-1/2" src={`../src/assets/${eye}.svg`} onClick={handleShowPassword} alt="" />
                    <img className="absolute right-3 bottom-1/2 translate-y-1/2 hidden" src="../src/assets/show.svg" alt="" />
                </div>
                <button disabled={data.password.length < 3 || data.username.length < 3} onClick={handlesave} className={data.password.length < 3 || data.username.length < 3 ? "my-3 px-4 py-2 bg-gray-400 rounded-full flex items-center gap-1 border-2 border-gray-800 text-gray-800" : "my-3 px-4 py-2 bg-[#30e849] rounded-full flex items-center gap-1 border-2 border-black"}>
                    <lord-icon
                        src="https://cdn.lordicon.com/lzsupfwm.json"
                        trigger="hover"
                        className="w-10">
                    </lord-icon> Save</button>

            </div>
            <div className="w-full px-[30px] flex flex-col items-center my-6">
                <h1 className="capitalize font-bold text-2xl flex self-start">Your password</h1>

                {form.length === 0 && <div>No password to show please add some</div>}

                <table className="table-auto w-full rounded-md overflow-hidden max-sm:text-[12px]">
                    {form.length != 0 &&
                        <thead className="bg-green-800 text-white ">
                            <tr className="  *:py-1">
                                <th>Website</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Actions </th>
                            </tr>
                        </thead>}
                    <tbody className="bg-green-200">
                        {form.map((item) => {
                            //save passwords to localstorage every time newpassword is added or some password is deleted
                            localStorage.setItem("password", JSON.stringify(form))
                            return (
                                <tr key={item.id} className="*:py-1 ">
                                    <td className="">
                                        <div className="relative box-border pr-12 h-6 max-sm:h-4 overflow-y-hidden">
                                            <a className="mx-6" href={item.website} target="_blank">{item.website.split("/").join(" ").split(" ")[item.website.split("/").join(" ").split(" ").length - (item.website.split("/").join(" ").split(" ").length - 2)]}</a>
                                            <lord-icon onClick={(e) => {
                                                handlecopy(e, item.website)
                                                toast.success('URL copied succesfully!', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                }); 
                                            }} className="cursor-pointer w-6 max-sm:w-4 absolute right-3 bottom-1/2 translate-y-1/2 "
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" box-border relative ">
                                        <div className="flex justify-between items-center px-2 relative">
                                            <span className="overflow-auto no-scrollbar mr-6 text-nowrap">{item.username}</span>
                                            <lord-icon onClick={(e) => { handlecopy(e, item.username)
                                                toast.success('Username copied succesfully!', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                }); 
                                             }} className="cursor-pointer w-6 max-sm:w-4  absolute right-0 bottom-1/2 translate-y-1/2"
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" box-border relative ">
                                        <div className="flex justify-between items-center px-2 relative">
                                            <span className="overflow-auto no-scrollbar mr-6 text-nowrap">{item.password}</span>
                                            <lord-icon onClick={(e) => { handlecopy(e, item.password)
                                                toast.success('Password copied succesfully!', {
                                                    position: "top-right",
                                                    autoClose: 3000,
                                                    hideProgressBar: false,
                                                    closeOnClick: false,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                }); 
                                             }} className="cursor-pointer w-6 max-sm:w-4  absolute right-0 bottom-1/2 translate-y-1/2 "
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" justify-center gap-1 *:cursor-pointer">
                                        <div className="flex items-center justify-center max-sm:w-8 mx-2">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/vwzukuhn.json"
                                                trigger="hover">
                                            </lord-icon>
                                            <lord-icon onClick={(e) => { handledelete(e, item.id) }}
                                                src="https://cdn.lordicon.com/sxhqklqh.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Manager
