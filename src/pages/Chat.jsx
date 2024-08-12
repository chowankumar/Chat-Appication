import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import ChatBox from "../components/ChatBox"

const Chat = () => {
  return (

    <div className='min-h-[100vh] bg-gradient-to-r from-[#596AFF] to-[#383699] flex items-center justify-center'>

      <div className="w-[90%] h-[75vh]  max-w-[1300px] bg-white chat-container">

        <LeftSideBar/>
         <ChatBox/>
         <RightSideBar/>
      </div>
      
    </div>
  )
}

export default Chat