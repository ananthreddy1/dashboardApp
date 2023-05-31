import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const reqbody = {email, password}
        e.preventDefault();
        if(validate()){
            fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: {'content-type' : 'application/json'},
                body: JSON.stringify(reqbody),
            }).then(res => {
              return  res.json();
            }).then(resp => {
                if(Object.keys(resp).length === 0){
                    toast.error("Please Enter valid username")
                }
                else{
                    if(resp.success){
                        toast.success("Login Successfull");
                        localStorage.setItem("isLoginSucess", true)
                        navigate("/dashboard")
                    }
                    else{
                        toast.error("Please Enter Valid Credentials")
                    }
                }
            }).catch((error) => {
                toast.error("Login failed due to :" + error)
            })
        }
    }

    const validate = () => {
        let result = true;
        if(email === " " || email === null){
            result = false;
            toast.error("Please Enter Valid Email")
        }
        if(password === " " || password === null){
            result = false;
            toast.error("Please Enter Valid Password")
        }
        
        return result;
    }
    return (
        <div className='card bg-dark text-white' style={{ width: "40rem", margin: "auto" }}>
            <form className='container' onSubmit={handleSubmit}>
                <h1 style={{ textAlign: "center" }}>Login Here</h1>
                <div className='col-sm-6 offset-sm-3'>
                    <input
                        className='form-control mt-3'
                        type='email'
                        value={email}
                        placeholder='enter your email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        className='form-control mt-3'
                        type='password'
                        value={password}
                        placeholder='enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <ToastContainer />
                    <div
                        style={
                            {
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px"
                            }
                        } >
                        <button
                            type='submit'
                            className='btn btn-primary'
                        >Login</button>
                        <Link
                            className='btn btn-danger'
                            to="/register"
                        >Register</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;