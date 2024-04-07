import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'


import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";






function Login() {
    const navigate = useNavigate()

    

      const handlelogin = ()=>{
       setTimeout(()=>{
          navigate('/home')
        },9000)

      }

  
  return (
    <div className='body'>
    <div className='loginbdy'>
      <h2 className='head'>Login</h2>
      
       <div className='inputbox'>
          <div className='part'>
            <input type="text" placeholder='Email'/>
            <i class="fa-regular fa-envelope"></i>
            </div>
         <div> 
          <input type="password" placeholder='password' />
          <i className="fa-solid fa-lock"></i>
          </div>

          <button>Login
            
          </button>
          <span>or</span>
          <div className='googleauth'>
            <LoginSocialGoogle 
            
      client_id={"918897374620-29817er4in6lqh87ohu1j4uupki3ndh3.apps.googleusercontent.com"}
      scope="openid profile email"
      discoveryDocs="claims_supported"
      access_type="offline"
      
      onResolve={({ provider, data }) => {
        console.log(provider, data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
      
    >
      <GoogleLoginButton onClick={handlelogin}/>
    </LoginSocialGoogle> 


            

          </div>


       </div>
       
 
    </div>

   

  </div>
  )
}

export default Login