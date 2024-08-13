import React from 'react'
import assets from "./../assets/assets"

const RightSideBar = () => {
  return (
    <div className='rs text-white bg-[#001030]
    relative h-[75vh] overflow-y-scroll '>

      <div className="rs-profile pt-[60px] text-center max-w-[70%] m-auto flex flex-col items-center">
        <img src={assets.profile_img} alt=""
        className='w-[110px] rounded-[50%]' />
        <h3 className='text-[18px] font-[400]
        flex items-center justify-center gap-[5px]
        my-2'>Chowan Kumar <img src={assets.green_dot} alt="" /></h3>
        <p className='text-[12px] opacity-[80%]font-[300]'>hey i am chowan kumar using this chatBox</p>
      </div>
      <hr  className='border-[#ffffff50] my-[15px]'/>
      <div className="rs-media px-[20px] text-[15px]">
        <p>Media</p>
        <div className='max-h-[180px] overflow-y-scroll grid grid-cols-3 gap-[5px] mt-[8px]'>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button className='absolute bottom-[10px] left-[25%] bg-[#077eff] text-white text-[12px] py-[10px] px-[65px]
       rounded-[20px] cursor-pointer '>Logout</button>

    </div>
  )
}

export default RightSideBar