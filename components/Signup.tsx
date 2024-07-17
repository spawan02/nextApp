"use client"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default ()=>{
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const router = useRouter();

    const handler = async()=>{
        await axios.post("http://localhost:3000/api/user",{
            name, 
            password
        })
        router.push('/')
    }    

    return(
    <div className="flex justify-center flex-col h-screen bg-slate-200">
        <div className="flex justify-center">
            <div className="border bg-white rounded text-center p-4">
                <div className="p-4 text-black font-bold">
                    SignUp
                </div>
                <div className="font-semibold text-start">
                    Username:
                </div>
                <input type="text" placeholder="paw" onChange={e=>setName(e.target.value)} className="width-full border rounded mb-4 p-2"/><br />
                <div className="font-semibold text-start">
                    Password:
                </div>
                <input type="text" placeholder="12345" onChange={e=>setPassword(e.target.value)} className="width-full border rounded mb-4 p-2"/><br />
                <button type="button" onClick={handler} className="bg-blue-400 rounded p-1 mt-2 w-full">Submit</button>
            </div>
        </div>
    </div>
    )
}