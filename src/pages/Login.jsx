import React, { useState } from 'react'
import assets from "./../assets/assets"
import { signup,Login,resetPass } from '../config/firebase'

const login = () => {

  const [currState, setCurrState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmiHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign Up") {
      signup(userName, email, password)

      setUserName("");
      setEmail("");
      setPassword("");

    } else {
      Login(email, password)
      setEmail("");
      setPassword("");
    }



  }

  return (

    <div className='chat-bg min-h-[100vh] flex items-center justify-evenly '>

      <img src={assets.logo_big} alt="" className='logo w-[300px]' />

      <form onSubmit={onSubmiHandler} action="" className='bg-white 
        p-[30px] flex flex-col gap-[20px] rounded-[10px]'>
        <h2 className='font-[500]'>{currState}</h2>
        {
          currState === "Sign Up" ?
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              placeholder='username'
              className='py-[8px] px-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'
              required

            /> : <></>

        }

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder='Email address'
          className='py-[8px] px-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'
        />


        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder='password'
          className='py-[8px] px-[10px] border border-[#c9c9c9] rounded-[4px] outline-[#077eff]'
        />


        <button type='submit' className='p-[10px] bg-[#077EFF] text-white text-[16px] border-none rounded-[4px] cursor-pointer'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>

        <div className="flex gap-[5px] text-[12px] text-[#808080]">
          <input
            type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className='flex flex-col gap-5'>

          {
            currState === "Sign Up" ?
              <p className='text-[13px] text-[#5c5c5c]'>Already have and account?<span className='font-[500] text-[#077EFF]
            cursor-pointer' onClick={() => setCurrState("Login")}>click here</span></p> :
              <p className='text-[13px] text-[#5c5c5c]'>Create an Account <span className='font-[500] text-[#077EFF]
            cursor-pointer' onClick={() => setCurrState("Sign Up")}>click here</span></p>

          }
          {
            currState === "Login"?<p className='text-[13px] text-[#5c5c5c]'>Forget Password <span className='font-[500] text-[#077EFF]
            cursor-pointer' onClick={() => resetPass(email)}>reset here</span></p>:null
          }



        </div>

      </form>


    </div>


  )
}

export default login