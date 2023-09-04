import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import noteContext from '../context/noteContext';

const Login = () => {
    const navigate = useNavigate();
    const [creds, setCreds] = useState({ email: "", password: "" })
    const loginuser = async (e) => {
        e.preventDefault();
        const loginresponse = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: creds.email, password: creds.password })
        })
        const json = await loginresponse.json();

        if (json.success) {
            sessionStorage.setItem("authToken", json.authToken);
            navigate("/");
        } else {
            alert("Invalid Credentials.");
        }
    }

    const handlechange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    return (
        <div className="container my-3" style={{ width: "500px", padding: "5vh 2vw 5vh 2vw", border: "1px solid grey", borderRadius: "1vh" }}>
            <p className="h1 text-center">Login</p>
            <form onSubmit={loginuser}>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={handlechange} aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <div id="emailHelp" className="form-text my-2">Don't have account? Create new <Link to="/signup">sign-up</Link></div>
            </form>
        </div>
    )
}

export default Login