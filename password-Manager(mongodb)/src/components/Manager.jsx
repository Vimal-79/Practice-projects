"use client"
import { useState, useEffect , memo } from "react"
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
    const [passwordVisiblity , setPasswordVisiblity] = useState(false)

    const fetchData = async () => {
        const a = await fetch("http://localhost:3000/")
        const data = await a.json()
        setForm(data)
    }

    const showToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    // const scrollwindow = ()=>{
    //     window.scrollTo(0, 300)
    // }
    // scrollwindow()

    const scrollWindow = () => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        fetchData()
    }, [])

    scrollWindow();

    const sendData = async (dataToSend) => {
        const a = await fetch("http://localhost:3000/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(dataToSend) })
        const data = await a.json()
    }

    const deleteAllData = async () => {
        const a = await fetch("http://localhost:3000/", { method: "PATCH" });
        showToast("All passwords are deleted");
    }

    const updateData = async (dataToSend) => {
        const a = await fetch("http://localhost:3000/", {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })
    }

    //handle save button
    const handlesave = async () => {
        if (data.id) {
            updateData(data)
            showToast("password updated!")
        }
        else {
            setForm([...form, { ...data, id: uuidv4() }]);
            await sendData({ ...data, id: uuidv4() })
            showToast("password saved!")

        }
        setData({
            website: "",
            username: "",
            password: ""
        });

    }


    //function for show/hide password inside input
    const handleShowPassword = (e) => {
        showpassword ? setEye((eye) => "not-show") : setEye((eye) => "show");
        setShowpassword((showpassword) => !showpassword);
    }


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handlesave();
        }
    };


    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    //handle edit
    const handleedit = (e, id) => {
        let user = form.filter(item => id === item.id)
        setData(user[0])
    }

    //delter form server
    const deleteData = async (user) => {
        const a = await fetch("http://localhost:3000/", {
            method: "delete",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });
    }

    //handle delete button
    const handledelete = async (e, id) => {
        let user = form.filter(item => id === item.id)
        let clientData = form.filter(item => id !== item.id)
        confirm(`do you want to delete "${user[0].username}" and it's password`) && (deleteData(user), setForm(clientData), showToast("Password deleted!"));
    }

    const handlecopy = (e, text) => {
        navigator.clipboard.writeText(text);
        showToast("copied to clipboard!");
    }

    return (
        <div onKeyDown={(data.password.length > 3 && data.username.length > 3) ? handleKeyDown : undefined}>
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
            <div className="inputarea flex flex-col items-center gap-3 w-4/5 mx-auto cursor-pointer max-sm:text-[12px]">
                <input value={data.website} onChange={handleInput} name="website" className="w-full p-1 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type="text" placeholder="Enter website URL" />
                <div className="flex max-sm:flex-col gap-4 w-full">
                    <div className="w-[70%] max-sm:w-full"><input value={data.username} name="username" onChange={handleInput} className="w-full p-1 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type="text" placeholder="Enter Username" /></div>
                    <div className="w-[30%] max-sm:w-full relative"><input value={data.password} name="password" onChange={handleInput} className="w-full p-1 pr-10 rounded-full outline-green-500 px-3 placeholder:text-gray-600 border border-black" type={showpassword ? "text" : "password"} placeholder="Enter password" />
                        <img className="absolute right-3 bottom-1/2 translate-y-1/2 max-sm:w-4" src={`../src/assets/${eye}.svg`} onClick={handleShowPassword} alt="" />
                    </div>
                </div>
                <button disabled={data.password.length < 3 || data.username.length < 3} onClick={handlesave} className={data.password.length < 3 || data.username.length < 3 ? "my-3 px-4 max-sm:px-2 sm:py-2 bg-gray-400 rounded-full flex items-center gap-1 border-2 border-gray-800 text-gray-800 max-sm:text-[12px]" : "my-3 px-4 max-sm:px-2 sm:py-2 bg-[#30e849] rounded-full flex items-center gap-1 border-2 border-black max-sm:text-[12px]"}>
                    <lord-icon
                        src="https://cdn.lordicon.com/lzsupfwm.json"
                        trigger="hover"
                        className="sm:w-10 max-sm:w-6">
                    </lord-icon>{data.id ? "Update" : "Save"}</button>

            </div>
            <div className="w-full overflow-auto px-8 flex flex-col items-center my-6">


                {form.length === 0 && <div>No password to show please add some</div>}

                <table className="table-auto w-full mx-auto rounded-md overflow-hidden max-sm:text-[12px] mb-14">
                    {form.length > 0 &&
                        <thead>
                            <tr>
                                <th>
                                    <h1 className="capitalize font-bold sm:text-2xl flex self-start">Your password</h1>
                                </th>
                                <th></th>
                                <th></th>
                                <th>
                                    <button onClick={() => {
                                        confirm("Do you want to delete all saved passwords") && confirm("Are you sure about delete all saved passwords") && (deleteAllData(), setForm([]))
                                    }} className={form.length > 0 ? "text-red-600 bg-white rounded-md px-3 h-fit hover:bg-red-500 hover:text-white transition-all" : "hidden"}>clear</button>
                                </th>
                            </tr>
                            <tr className="  *:py-1 max-[500px]:*:font-normal bg-green-800 text-white">
                                <th>Website</th>
                                <th className="w-[120px] border-x border-white">Username</th>
                                <th className="w-[120px] border-x border-white">Password</th>
                                <th className="sm:w-[80px]">Actions </th>
                            </tr>
                        </thead>}
                    <tbody className="bg-green-200">
                        {form.length !== 0 && form.map((item) => {
                            return (
                                <tr key={item.id} className="*:py-1 border-t border-white">
                                    <td className="">
                                        <div className="relative box-border pr-12 h-6 max-sm:h-4 overflow-y-hidden *:cursor-pointer">
                                            <p onClick={() => { window.open(item.website) }} className=" mx-5 max-w-[600px] overflow-auto no-scrollbar">{item.website}</p>
                                            <lord-icon onClick={(e) => { handlecopy(e, item.website) }} className=" w-6 max-sm:w-4 absolute right-3 bottom-1/2 translate-y-1/2 "
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" box-border border-x border-white relative ">
                                        <div className="flex justify-between items-center max-w-[120px] px-2 relative">
                                            <span className="overflow-auto no-scrollbar mr-6 text-nowrap cursor-pointer">{item.username}</span>
                                            <lord-icon onClick={(e) => { handlecopy(e, item.username) }} className="cursor-pointer w-6 max-sm:w-4  absolute right-0 bottom-1/2 translate-y-1/2"
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" box-border border-x border-white relative ">
                                        <div className="flex justify-between items-center px-2 max-w-[120px] relative">
                                            <span className="overflow-auto no-scrollbar mr-6 text-nowrap cursor-pointer" onClick={()=>{setPasswordVisiblity(passwordVisiblity => !passwordVisiblity)}}>{passwordVisiblity ? item.password : <span className="font-extrabold">********</span>}</span>
                                            <lord-icon onClick={(e) => { handlecopy(e, item.password) }} className="cursor-pointer w-6 max-sm:w-4  absolute right-0 bottom-1/2 translate-y-1/2 "
                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                trigger="hover" >
                                            </lord-icon>
                                        </div>
                                    </td>

                                    <td className=" justify-center gap-1 *:cursor-pointer">
                                        <div className="flex items-center justify-center max-sm:w-8 mx-2">
                                            <lord-icon onClick={(e) => { handleedit(e, item.id) }}
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
        </div>
    )
}

export default Manager
