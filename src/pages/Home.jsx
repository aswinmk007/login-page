import React from 'react'
import {  useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()
  const handlelogout = ()=>{
    navigate('/')

    
  }
  return (
    <div className='home'>
        <h1>welcome</h1>
        <button onClick={handlelogout}>Logout</button>
        <div className='d-flex justify-content-center align-items-center'>
          <img src="https://png.pngtree.com/png-vector/20220721/ourmid/pngtree-sales-team-with-financial-business-growth-development-from-people-working-and-png-image_6014781.png" alt="" />
        </div>
    </div>
  )
}

export default Home