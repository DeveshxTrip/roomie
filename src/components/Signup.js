import React from 'react'
import './style.css'

const Signup = () => {
  return (
    <div className='main-div'>
      <div className='container1'>
      
        <div className='input'>
        <h1>Signup</h1>
          <div className='inp-name'>
            <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/1077/1077012.png' alt='cc'/>
            <input className='inp' type="text" placeholder='Enter Name'/>
          </div>

          <div className='inp-name'>
            <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/8917/8917564.png' alt='cc'/>
            <input className='inp' type="number" placeholder='Enter Phone Number'/>
          </div>

          <div className='inp-name'>
            <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/2665/2665311.png' alt='cc'/>
            <input className='inp' type="password" placeholder='Enter Password'/>
          </div>

          <div className='inp-name'>
            <img className='user-img' src='https://cdn-icons-png.flaticon.com/512/2665/2665311.png' alt='cc'/>
            <input className='inp' type="password" placeholder='Confirm Password'/>
          </div>

          <div className='btn'>
          <button className='button button-primary button-wide-mobile button-sm'>Submit</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Signup