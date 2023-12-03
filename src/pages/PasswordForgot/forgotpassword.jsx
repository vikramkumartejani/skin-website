import React from 'react'
import './forgot.css'
import Header from '../../components/Header/header';
import ForgotImg from '../../Images/ForgotImg.webp'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <div className='main-container'>
        <div className='content-container'>
          <div className='form-container'>
            <h1>Forgot your password?</h1>
            <p style={{ color: '#4C4D4F' }}>No worries, enter your email below to get instructions to reset your password</p>
            <form className='form'>
              <div className='email'>
                <label>Email</label>
                <input type="email" placeholder='Jane@gmail.com' />
              </div>
              <div className='login-page'>
                <Link className='button' to="/newpassword">Reset Password</Link>
              </div>
              <p style={{ textAlign: 'center', paddingTop: '.8rem' }}><a href='./' style={{ color: 'rgba(76, 77, 79, 0.5)' }}>I remember my password</a></p>
            </form>
          </div>
          <div>
            <img src={ForgotImg} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;