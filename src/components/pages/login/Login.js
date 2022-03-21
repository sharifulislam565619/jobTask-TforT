import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/blue-logo 1.png';
import groupImg from '../../../assets/images/groupImg.png';
import useAuth from '../../../hooks/useAuth';
import './login.css';
const Login = () => {
    const { signInWithGoogle, setUser, saveUser, setError, resetPassword, signInWithEmailPassword } = useAuth();
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])



    const navigate = useNavigate();
    const location = useLocation();
    const url = location?.state?.from || "/home"


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignInEmailPassword = (e) => {
        e.preventDefault()
        signInWithEmailPassword(email, password, navigate, url)
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate, location)
    }



    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                alert("You can rest your password. check your email")
                setError("")
            })
            .catch((error) => {

                setError(error.message)
            });
    }

    return (
        <div>
            <div className="login-page col-md-8">
                <img src={groupImg} alt="groupImg" />
            </div>
            <div className="col-md-4">
                <div className="login-form">
                    <div className='logo' >
                        <img src={logo} alt="logo" />
                    </div>
                    <h2>Explore The Best Tours... Hurry up!!</h2>
                    <form onSubmit={handleSignInEmailPassword} className='d-flex flex-column align-items-center mb-4'>

                        <input onChange={handleEmail} className='my-3 px-1' type="email" placeholder='Email Address' />
                        <input onChange={handlePassword} className='my-3 px-2 mb-2' type="password" placeholder='password' />
                        <Link onClick={handleResetPassword} to='/' className='forgot-p mt-0'><p>Forgot Password?</p></Link>
                        <input className='login-btn my-3 px-2' type="submit" value='LOG IN' />

                    </form>

                    <div>
                        <svg width="145" height="1" viewBox="0 0 145 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="145" y2="0.5" stroke="#666666" />
                        </svg>
                        <span className='px-3'> or</span>
                        <svg width="145" height="1" viewBox="0 0 145 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="145" y2="0.5" stroke="#666666" />
                        </svg>
                    </div>
                    <div className='mt-4 mb-5'>
                        <svg className='me-5' width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 52.6946C42.6878 52.6946 55 40.8985 55 26.3473C55 11.7961 42.6878 0 27.5 0C12.3122 0 0 11.7961 0 26.3473C0 40.8985 12.3122 52.6946 27.5 52.6946Z" fill="#3B5998" />
                            <path d="M30.4688 53.4611V33.7006H37.3438L39.0625 25.4671H30.4688V22.1737C30.4688 18.8802 32.1909 17.2335 35.625 17.2335H39.0625V9C37.3438 9 35.2125 9 32.1875 9C25.8711 9 21.875 13.7442 21.875 20.5269V25.4671H15V33.7006H21.875V53.4611H30.4688Z" fill="white" />
                        </svg>

                        <span onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>
                            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.5002 11.0417C30.0705 11.0417 33.3488 12.264 35.9658 14.2969L43.9978 6.63403C39.3279 2.5174 33.2149 0 26.5002 0C16.325 0 7.50114 5.74148 3.06049 14.1551L11.9919 21.2061C14.1555 15.2803 19.8254 11.0417 26.5002 11.0417Z" fill="#F44336" />
                                <path d="M52.7705 29.8165C52.9085 28.7308 53 27.6233 53 26.5C53 24.6056 52.7931 22.7609 52.4153 20.9792H26.5V32.0208H40.8237C39.6649 35.0325 37.6018 37.5809 34.9756 39.3513L43.9402 46.4286C48.6924 42.2574 51.9444 36.4162 52.7705 29.8165Z" fill="#2196F3" />
                                <path d="M11.0417 26.5C11.0417 24.6374 11.3881 22.8598 11.9918 21.2062L3.06032 14.1551C1.11374 17.8434 0 22.0395 0 26.5C0 30.9106 1.09325 35.0603 2.99939 38.7186L11.9422 31.6585C11.3695 30.0431 11.0417 28.3118 11.0417 26.5Z" fill="#FFC107" />
                                <path d="M26.4996 41.9583C19.774 41.9583 14.0676 37.6554 11.9417 31.6585L2.99896 38.7186C7.41792 47.1998 16.2746 53 26.4996 53C33.1859 53 39.2831 50.516 43.9398 46.4286L34.9752 39.3513C32.5531 40.9842 29.654 41.9583 26.4996 41.9583Z" fill="#00B060" />
                                <path opacity="0.1" d="M26.4992 52.4479C18.7001 52.4479 11.6873 49.23 6.72919 44.1033C11.5827 49.5501 18.6297 53 26.4992 53C34.2959 53 41.2845 49.6182 46.1271 44.2567C41.1837 49.3002 34.2242 52.4479 26.4992 52.4479Z" fill="black" />
                                <path opacity="0.1" d="M26.5 31.4688V32.0208H40.8237L41.0474 31.4688H26.5Z" fill="black" />
                                <path d="M52.9869 26.8248C52.9889 26.716 53.0012 26.6091 53.0012 26.5001C53.0012 26.4692 52.9955 26.4394 52.9954 26.4085C52.9936 26.5476 52.9854 26.6851 52.9869 26.8248Z" fill="#E6E6E6" />
                                <path opacity="0.2" d="M26.5 20.9792V21.5312H52.5265C52.4917 21.349 52.4537 21.16 52.4153 20.9792H26.5Z" fill="white" />
                                <path d="M52.4153 20.9792H26.5V32.0208H40.8237C38.5962 37.8102 33.0746 41.9583 26.5 41.9583C17.9627 41.9583 11.0417 35.0373 11.0417 26.5C11.0417 17.9625 17.9627 11.0417 26.5 11.0417C29.5958 11.0417 32.449 11.9927 34.8663 13.5607C35.2363 13.8011 35.618 14.0269 35.9656 14.2969L43.9976 6.63403L43.8165 6.49466C39.1691 2.46685 33.1328 0 26.5 0C11.8644 0 0 11.8644 0 26.5C0 41.1355 11.8644 53 26.5 53C40.0099 53 51.135 42.8831 52.7705 29.8165C52.9085 28.7308 53 27.6233 53 26.5C53 24.6056 52.7931 22.7609 52.4153 20.9792Z" fill="url(#paint0_linear_1_142)" />
                                <path opacity="0.1" d="M34.8663 13.0086C32.4491 11.4407 29.5958 10.4896 26.5 10.4896C17.9627 10.4896 11.0417 17.4105 11.0417 25.9479C11.0417 26.0411 11.0429 26.1139 11.0446 26.2067C11.1935 17.7981 18.0558 11.0417 26.5 11.0417C29.5958 11.0417 32.4491 11.9927 34.8663 13.5607C35.2363 13.8012 35.618 14.0269 35.9656 14.2969L43.9977 6.63405L35.9656 13.7448C35.618 13.4748 35.2363 13.2491 34.8663 13.0086Z" fill="black" />
                                <path opacity="0.2" d="M26.5 0.552083C33.0699 0.552083 39.0498 2.97769 43.6793 6.9377L43.9976 6.63403L43.7547 6.42244C39.1073 2.39463 33.1328 0 26.5 0C11.8644 0 0 11.8644 0 26.5C0 26.5931 0.0129395 26.683 0.0138829 26.776C0.163495 12.2692 11.9575 0.552083 26.5 0.552083Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_142" x1="0" y1="26.5" x2="53" y2="26.5" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.2" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    <div className='mb-5 pb-3'>
                        <p>Do not have an account? <Link to="/signUp">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;