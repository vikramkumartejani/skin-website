import React from 'react'
import './newpassword.css'
import Header from '../../components/Header/header'
import NewPassImg from '../../Images/NewPasswordImg.webp'
import { Link } from 'react-router-dom'

const NewPassword = () => {
  return (
    <>
      <Header />
      <div className='main-container'>
        <div className='content-container'>
          <div className='form-container'>
            <h1>Reset your password</h1>
            <p style={{ color: '#4C4D4F' }}>Create a new strong password, must be at least 8 characters long</p>
            <form className='form'>
              <div className='password'>
                <label>New Password</label>
                <input type="password" placeholder='********' />
              </div>
              <div className='password'>
                <label>Confirm Password</label>
                <input type="password" placeholder='********' />
              </div>
              <div className='login-page'>
                <Link className='button' to="/newpassword">Reset Password</Link>
              </div>
              <p style={{ textAlign: 'center', paddingTop: '.8rem' }}><a href='/login' style={{ color: 'rgba(76, 77, 79, 0.5)' }}>Back to Login</a></p>
            </form>
          </div>
          <div>
            <img src={NewPassImg} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPassword