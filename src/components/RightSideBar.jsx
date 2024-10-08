import React, { useContext, useEffect, useState } from 'react'
import assets from "./../assets/assets"
import { logout } from '../config/firebase'
import {AppContext} from "../context/AppContext"

const RightSideBar = () => {

  const {chatUser,messages} = useContext(AppContext);
  const [msgImages,setMsgImages] = useState([]);

  useEffect(()=>{
    let tempVar = [];
    messages.map((msg)=>{
      if(msg.image){
        tempVar.push(msg.image)
      }
    })
    console.log(tempVar)
    setMsgImages(tempVar)

  },[messages])


  return chatUser ?  (
    <div className='rs text-white bg-[#001030]
    relative h-[75vh] overflow-y-scroll '>

      <div className="rs-profile pt-[60px] text-center max-w-[70%] m-auto flex flex-col items-center">
        <img src={chatUser.userData.avatar} alt=""
        className='w-[110px] rounded-[50%]' />
        <h3 className='text-[18px] font-[400]
        flex items-center justify-center gap-[5px]
        my-2'>{chatUser.userData.name} <img src={assets.green_dot} alt="" /></h3>
        <p className='text-[12px] opacity-[80%]font-[300]'>{chatUser.userData.bio}</p>
      </div>
      <hr  className='border-[#ffffff50] my-[15px]'/>
      <div className="rs-media px-[20px] text-[15px]">
        <p>Media</p>
        <div className='max-h-[180px] overflow-y-scroll grid grid-cols-3 gap-[5px] mt-[8px]'>
          {
            msgImages.map((url,index)=>(
               <img 
               src={url}
               key={index}
               onClick={()=>window.open(url)} />

            ))
          }
          {/* <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" /> */}
        </div>
      </div>
      <button className='absolute bottom-[10px] left-[25%] bg-[#077eff] text-white text-[12px] py-[10px] px-[65px]
       rounded-[20px] cursor-pointer ' 
       onClick={()=> logout(  )}>Logout</button>

    </div>
  )
  :<div className='rs text-white bg-[#001030]
    relative h-[75vh] overflow-y-scroll'>
    <button className='absolute bottom-[40px] left-[25%] bg-[#077eff] text-white text-[12px] py-[10px] px-[65px]
       rounded-[20px] cursor-pointer ' 
       onClick={()=> logout(  )}>Logout</button>
  </div>
}

export default RightSideBar