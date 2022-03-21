import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './SignUp.css';





const SignUp = () => {
    const { registerWithEmailPassword, error } = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()

    const navigate = useNavigate()
    const location = useLocation()
    const url = location?.state?.from || '/home'




    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)



    }
    const handlePassword = (e) => {
        setPassword(e.target.value)


    }

    const handleRegister = (e) => {
        e.preventDefault()
        registerWithEmailPassword(email, password, name, navigate, url)

    }

    return (
        <>
            <div className="register-form py-4 mt-5">

                <div className="my-cart fs-6">
                    <h2>Please Register</h2>
                    <p className="text-danger">{error}</p>
                    <form onSubmit={handleRegister}>
                        <input onBlur={handleName} type="text" required placeholder="Enter Your Name" />
                        <br />
                        <input onBlur={handleEmail} type="email" required placeholder="Enter Your Email" />
                        <br />
                        <input onBlur={handlePassword} type="password" required placeholder="Enter Password" /><br />
                        <input className="register-btn" type="submit" value="Register" /><br />
                    </form>
                    <span>I have an account <Link to="/">Login</Link></span><br />


                </div>
            </div>
        </>
    );
};

export default SignUp;