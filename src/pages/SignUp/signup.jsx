import React from 'react'
import './signup.css'
import Image from '../../Images/signupImg.webp'
import Header from '../../components/Header/header'
import { Link } from 'react-router-dom'


const SignUp = () => {
   
    return (
        <>
            <Header />
            <div className='main-container'>
                <div className='content-container'>
                    <div className='form-container'>
                        <h1>Create an account</h1>
                        <p>Already have an account? <a href='/login' style={{color:'#4C4D4F'}}> Log in</a></p>
                        <div className='links'>
                            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M24 12.2668C24 11.2801 23.9183 10.5601 23.7415 9.8134H12.2446V14.2668H18.993C18.857 15.3735 18.1223 17.0402 16.4896 18.1602L16.4667 18.3093L20.1018 21.069L20.3536 21.0936C22.6665 19.0002 24 15.9202 24 12.2668Z" fill="#4285F4" />
                                    <path d="M12.2432 24.0005C15.5493 24.0005 18.3248 22.9338 20.3522 21.0938L16.4881 18.1603C15.4541 18.867 14.0663 19.3603 12.2432 19.3603C9.00506 19.3603 6.25673 17.267 5.27703 14.3736L5.13343 14.3855L1.35363 17.2523L1.3042 17.3869C3.31782 21.307 7.45395 24.0005 12.2432 24.0005Z" fill="#34A853" />
                                    <path d="M5.27896 14.3737C5.02046 13.627 4.87085 12.827 4.87085 12.0003C4.87085 11.1736 5.02046 10.3736 5.26536 9.62692L5.25851 9.4679L1.43133 6.55511L1.30612 6.61348C0.476205 8.2402 0 10.0669 0 12.0003C0 13.9337 0.476205 15.7603 1.30612 17.387L5.27896 14.3737Z" fill="#FBBC05" />
                                    <path d="M12.2432 4.64006C14.5426 4.64006 16.0936 5.61341 16.978 6.42682L20.4339 3.12006C18.3114 1.1867 15.5494 0 12.2432 0C7.45399 0 3.31783 2.69337 1.3042 6.61342L5.26346 9.62685C6.25676 6.73346 9.0051 4.64006 12.2432 4.64006Z" fill="#EB4335" />
                                </svg>Continue with Google
                            </a>
                            <a href='#' style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 20" fill="none">
                                    <path d="M7.53321 19.7143C4.76035 19.7143 2.17558 18.9078 0 17.5162C1.84714 17.6358 5.10692 17.3495 7.1345 15.4155C4.08435 15.2756 2.7088 12.9362 2.52938 11.9365C2.78854 12.0365 4.02454 12.1565 4.72229 11.8766C1.21363 10.9968 0.675367 7.91771 0.79498 6.97798C1.45285 7.43784 2.56925 7.5978 3.00783 7.55781C-0.261606 5.21849 0.914594 1.69951 1.49273 0.939728C3.83899 4.19028 7.35532 6.01592 11.7055 6.11746C11.6234 5.75773 11.5801 5.38322 11.5801 4.99855C11.5801 2.23793 13.8115 0 16.564 0C18.0022 0 19.2981 0.610932 20.2077 1.58815C21.1688 1.36295 22.6151 0.835772 23.3222 0.37989C22.9658 1.65952 21.8562 2.72699 21.1851 3.12264C21.1796 3.10912 21.1906 3.1361 21.1851 3.12264C21.7746 3.03346 23.3698 2.72689 24 2.29933C23.6884 3.01821 22.512 4.21348 21.5466 4.88265C21.7262 12.804 15.6656 19.7143 7.53321 19.7143Z" fill="#47ACDF" />
                                </svg>  Continue with Google
                            </a>
                        </div>
                        <span class="line">
                            <h2>Or</h2>
                        </span>
                        <form className='form'>
                            <div className='name'>
                                <div className='fir-name'>
                                    <label>First Name</label>
                                    <input type="text" placeholder='Jane' />
                                </div>
                                <div className=' sec-name'>
                                    <label>Last Name</label>
                                    <input type="text" placeholder='Doe' />
                                </div>
                            </div>
                            <div className='email'>
                                <label>Email</label>
                                <input type="email" placeholder='Jane@gmail.com' />
                            </div>
                            <div className='password'>
                                <label>Password</label>
                                <input type="password" placeholder='********' />
                            </div>
                            <div className='checked-btn'>
                                <input  style={{width:'24px', height:'24px' ,borderRadius:'6px', border:'1px solid #4C4D4F' }} type="checkbox"/>
                                <label for="vehicle1">Subscribe to our monthly newsletter</label>
                            </div> 
                            <div className='term-condition'>
                                <p>By clicking below you agree to our <a href='#' style={{color:'#4C4D4F', }}>Terms of Service</a> and <a href='#' style={{color:'#4C4D4F', }}>Privacy Policy</a></p>
                            </div>
                            <div className='login-page'>
                                <Link className='button' to="/login">Sign up</Link>
                            </div>
                            <p style={{textAlign:'center', paddingTop:'.8rem'}}>Already have an account?<a href='/login' style={{color:'#4C4D4F'}}> Log in</a></p>
                        </form>
                    </div>
                    <div>
                        <img src={Image} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp