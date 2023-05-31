import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {
    const [password, setPassword] = useState('');
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    

    const navigate = useNavigate();


    const isValidate = () => {
        let isproceed = true;
        let errmessage = 'Please enter the value in '
        if (password === null || password === '') {
            isproceed = false;
            errmessage += ' Password '
        }
        if(firstName === null || firstName === ''){
            isproceed = false;
            errmessage += ' Firstname '
        }
        if(lastName === null || lastName === ''){
            isproceed = false;
            errmessage += ' Lastname '
        }
        if(email === null || email === ''){
            isproceed = false;
            errmessage += ' Email '
        }
        if (!isproceed) {
            alert(errmessage)
        }
        return isproceed
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { password, email, firstName, lastName }
        if (isValidate()) {
            fetch("http://localhost:8000/api/users", {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(data)
            }).then((res) => {
                toast.success("Registered successfully");
                navigate('/login')
            }).catch((error) => {
                toast.error('failed :' + error)
            })
        }
    }

    const handleCancel = () => {
        navigate("/login")
    }
    return (
        <div>
            <div className='offset-lg-12 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card'>
                        <div className='card-header'>
                            <h1>User Registration</h1>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Firstname<span className='errmsg'>*</span></label>
                                        <input value={firstName} onChange={(e) => setFirstname(e.target.value)} type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Lastname<span className='errmsg'>*</span></label>
                                        <input value={lastName} onChange={(e) => setLastname(e.target.value)} type='text' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email<span className='errmsg'>*</span></label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Password<span className='errmsg'>*</span></label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Submit</button> |
                            <a href='/' onClick={handleCancel} className='btn btn-danger'>Back</a>
                        </div>

                    </div>
                </form>

            </div>

        </div>
    )
}

export default Register;