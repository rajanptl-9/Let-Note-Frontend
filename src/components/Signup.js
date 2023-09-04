import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    const [creds, setCreds] = useState({ name: "", email: "", password: "", cpassword: "" })
    const loginuser = async (e) => {
        e.preventDefault();
        if(creds.cpassword !== creds.password){
            alert('Confirm password should be same as password.')
            return;
        }
        const loginresponse = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
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
            <p className="h1 text-center">Sign-Up</p>
            <form onSubmit={loginuser}>
                <div className="mb-3 my-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={handlechange} />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3 my-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' onChange={handlechange} aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' minLength={5} onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name='cpassword' minLength={5} onChange={handlechange} />
                </div>
                <button type="submit" disabled={creds.name.length < 3 || creds.password.length < 5 || creds.cpassword.length < 5 || creds.email === ""} className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup