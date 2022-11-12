import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className='main-div'>
    <div className='container1'>
    
      <div className='input'>
      <h1>Log In</h1>
        <div className='inp-name'>
          <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' alt='cc'/>
          <input className='inp' type="text" placeholder='Enter Username'/>
        </div>

        <div className='inp-name'>
          <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/2665/2665311.png' alt='cc'/>
          <input className='inp' type="password" placeholder='Enter Password'/>
        </div>


        <div className='btn'>
        <button className='button button-primary button-wide-mobile button-sm'>Submit</button>
        </div>
      </div>
    </div>  
  </div>
  )
}

export default Login