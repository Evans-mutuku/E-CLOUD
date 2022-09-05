import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../features/userSlice'

const Header: React.FC = () => {
    const navigate  = useNavigate()
    const user = useSelector(selectUser)

    const validateUpload = () => {
        if(!user){
            navigate("/login")
        } else (
            navigate("/uploadJob")
        )
    }
  
    return (
        <header className="w-full py-4 shadow-md bg-white">
            <nav className="mx-auto w-5/6 flex justify-between items-center">
                <div>
                    <h2  onClick={() => navigate("/")} className="text-2xl font-bold text-green-600 cursor-pointer">E-Cloud</h2>
                </div>
                <div className="flex space-x-16">
                    <p onClick={() => navigate("/")} className="hover:text-green-600 cursor-pointer text-lg">
                        Home
                    </p>
                    <p  onClick={() => navigate("/about")} className="hover:text-green-600 cursor-pointer text-lg"
                    >
                        About
                    </p>
                    <p  onClick={() => navigate("/contact")} className="hover:text-green-600 cursor-pointer text-lg"
                    >
                        Contacts
                    </p>
                    <p  onClick={() => navigate("/developers")} className="hover:text-green-600 cursor-pointer text-lg"
                    >
                        Hire
                    </p>
                    <p  onClick={() => navigate('/jobs')} className="hover:text-green-600 cursor-pointer text-lg"
                    >
                        Find Job
                    </p>
                </div>
                <div className="space-x-5">
                    <button
                    onClick={validateUpload}
                        className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
                    >
                        Upload Job
                    </button>
                    <button
                     onClick={() => navigate("/createProfile")}
                        className="py-2 px-5 bg-green-600 hover:bg-white hover:text-green-600 border-green-600 border text-sm rounded-full text-white"
                    >
                        Create Dev Profile
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header