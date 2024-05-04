import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=setCurrState("Sign-up")
  return (
    <div className="login-popup">
      <Form className="login-popup-container">
        
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
      </Form>
    </div>
  )
}

export default LoginPopup
