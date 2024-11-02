import React from 'react'
import email_at from '../assets/email.svg'
import lock from '../assets/lock.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
const Login = () => {
    return (
        <div>
            <div className="login">
                <div className="login-container">
                <form action="" className='form  '>
                    <div className="flex-column">
                        <label>Email</label>
                        <div className="inputForm">
                            <img src={email_at} alt="" />
                            <input type="email"  className='input' placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className="flex-column">
                        <label>Password</label>
                        <div className="inputForm">
                            <img src={lock} alt="" />
                            <input type="email" className='input' placeholder='Enter your email' />
                        </div>
                    </div>
                    <div class="flex-row">
                        <div>
                            <input type="radio" />
                            <label >Remember me</label>
                        </div>
                        <span class="span">Forgot password?</span>
                    </div>
                    <button class="button-submit">Sign In</button>
                    <p class="p">Don't have an account? <span class="span">Sign Up</span></p>
                    <p class="p line">Or With</p>
                    <div class="flex-row">
                        <button class="btn google"><img src={google} alt="" />Google</button>
                        <button class="btn apple"><img src={apple} alt="" />Apple</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Login
