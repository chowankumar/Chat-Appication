import React from 'react'
import assets from "./../assets/assets"

const ChatBox = () => {
  return (
    <div className='h-[75vh] relative
     bg-[#f1f5ff]'>
      <div className='py-[10px] px-[15px] flex gap-2 items-center border border-b-[#c6c6c6]'>
        <img src={assets.profile_img} alt=""
          className='w-[40px] rounded-[50%]' />
        <p className='flex-1 font-[500] text-[20px]
        text-[#393939] flex items-center gap-[5px]'>Chowan Kumar <img src={assets.green_dot} alt="" className='onlien-dot' /></p>
        <img src={assets.help_icon} alt="" className='w-[25px]' />
      </div>


      <div className="h-[calc(100%-70px)] pb-[50px]
      overflow-y-scroll flex flex-col-reverse gap-5 ">


        <div className="s-msg">

          <p className="text-white bg-[#077eff]
          p-[8px] max-w-[200px] text-[11px]
           font-[300] rounded-t-[5px]  rounded-l-[5px]
           ">hi kesi ho kya kr rhe ho ? or sb thk hy ajkal msg nh kr rhe?....</p>
           <div>
           <img className='w-[27px] rounded-[50px]' src={assets.profile_img} alt="" />
           <p className='text-center text-[9px]'>2:30 PM</p>
           </div>
        </div>

        <div className="s-msg">

          <img className='msg-img max-w-[230px] mb-[30px] rounded-md' src={assets.pic1} alt="" />
           <div>
           <img className='w-[27px] rounded-[50px]' src={assets.profile_img} alt="" />
           <p className='text-center text-[9px]'>2:30 PM</p>

           </div>
      
        </div>


        <div className="r-msg ">
          <p className="text-white bg-[#077eff]
          p-[8px] max-w-[200px] text-[11px] 
          font-[300] rounded-t-[5px] rounded-r-[5px]">hello han yar mnm to thk thak tum btao kese ho ajkal kjhn ho?...</p>
          <div>
          <img className='w-[27px] rounded-[50px]' src={assets.profile_img} alt="" />
          <p className='text-center text-[9px]'>2:30 PM</p>

          </div>
          
        </div>

      </div>



      <div className='flex items-center gap-[12px]
      py-[10px] px-[15px] bg-white absolute left-0 right-0 bottom-0'>
        <input type="text" placeholder='Send a message' className='flex-1 border-none outline-none' />

        <input type="file" id='image' accept='image/png, image/jpeg' hidden
        />

        <label htmlFor="image" className='flex '>
          <img src={assets.gallery_icon} alt="" className='w-[22px] cursor-pointer' />
        </label>

        <img src={assets.send_button} alt="" className='w-[32px] cursor-pointer' />
      </div>
    </div>
  )
}

export default ChatBox