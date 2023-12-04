import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    const  handleLogin=()=>{
        const body={
            email,password
        }
        axios.post("https://reidnax-ttoy.onrender.com/login",body,{headers:{}})
        .then(res=>{
            console.log("user logged in");
            navigate("/dash");
        })
        .catch(e=>console.log("Api fail ",e))
    }
    return (
        <div className='h-screen w-screen bg-gray-300 flex items-center justify-center '>
           
            <div className='w-72 h-96 bg-white flex flex-col justify-center items-center gap-6 rounded-tl-3xl rounded-br-3xl'>
                <div>
                    <p className='text-3xl'>Reidnax</p>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-input"
                        label="Email"
                        type="email"
                        autoComplete="current-password"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button variant="contained" className='w-36' onClick={handleLogin}>login</Button>
                </div>
            </div>
        </div>

    )
}

export default Login
