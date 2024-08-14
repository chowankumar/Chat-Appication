import React, { useContext, useEffect, useState } from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import ChatBox from "../components/ChatBox"
import { AppContext } from '../context/AppContext'

const Chat = () => {
  const {chatData,userData} = useContext(AppContext);
  const [loading,setLoading] = useState(true);


  useEffect(()=>{
    if(chatData && userData){
      setLoading(false)
    }
  },[chatData,userData])

  return (

    <div className='min-h-[100vh] bg-gradient-to-r from-[#596AFF] to-[#383699] flex items-center justify-center'>

      {
        loading?<p className='text-[50px] text-white'>Loading.....</p>
        :<div className="w-[90%] h-[75vh]  max-w-[1300px] bg-white chat-container">

        <LeftSideBar/>
         <ChatBox/>
         <RightSideBar/>
      </div>
      
      }
    </div>
  )
}

export default Chat