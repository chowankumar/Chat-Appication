import React from 'react'
import assets from "./../assets/assets"

const login = () => {
  return (

    <div className='chat-bg min-h-[100vh] flex items-center justify-evenly '>

      <img src={assets.logo_big} alt="" className='logo w-[300px]' />

      <form action="" className='bg-white 
        p-[30px] flex flex-col gap-[20px] rounded-[10px]'>
        <h2 className='font-[500]'>Sign Up</h2>

        <input
          type="text"
          placeholder='username'
          className='p-y-[8px] p-x-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'

          required

        />

        <input
          type="email"
          placeholder='Email address'
          className='p-y-[8px] p-x-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'
        />


        <input
          type="password"
          placeholder='password'
          className='p-y-[8px] p-x-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'
        />


        <button type='submit' className='p-[10px] bg-[#077EFF] text-white text-[16px] border-none rounded-[4px] cursor-pointer'>Sign Up</button>

        <div className="flex gap-[5px] text-[12px] text-[#808080]">
          <input
            type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className='flex flex-col gap-5'>

          <p className='text-[13px] text-[#5c5c5c]'>Already have and account?  <span className='font-[500] text-[#077EFF]
          cursor-pointer'>click here</span></p>

        </div>

      </form>


    </div>


  )
}

export default login