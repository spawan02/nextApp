
import axios from "axios"
// import { useEffect, useState } from "react"

const data =async ()=>{
    // const [ userData, setUserData ]=useState('')
    await new Promise(r=>setInterval(r, 5000))
    // const  response = await axios.get("http://localhost:3001")
    return ("esponse")

}
export default async function Card() {
    const details = await data()
    return (
        <div className="flex justify-center flex-col h-screen bg-slate-300">
            <div className="flex justify-center">
                <div className="text-center bg-slate-200 p-6 text-black font-medium rounded broder">
                    hi there <br />
                    {details}
                </div>
            </div>
            
        </div>
    )
}

