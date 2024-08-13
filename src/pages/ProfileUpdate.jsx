import React, { useState } from 'react'
import assets from "./../assets/assets"

const ProfileUpdate = () => {
  const [image, setImage] = useState(false)
  return (
    <div style={{
      backgroundImage: `url(/background.png)`,
    }} className='profile  min-h-[100vh] flex items-center justify-center '>
      <div className="profile-container bg-white flex items-center justify-between min-w-[700px] rounded-[10px]">
        <form className='flex flex-col gap-[20px] p-[40px]' >
          <h3 className='font-[500]'>Pro file Details</h3>
          <label htmlFor="avatar" className='flex items-center gap-[10px] text-gray-500 cursor-pointer'>

            <input onClick={(e)=>setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={image?URL.createObjectURL(image):assets.avatar_icon} alt=""
              className='w-[50px] rounded-[50%]' />
            upload profile image
          </label>
          <input className='p-[10px] min-w-[300px] border border-[#c9c9c9] outline-[#0773ff]' type="text" placeholder='your name' required />
          <textarea className='p-[10px] min-w-[300px] border border-[#c9c9c9] outline-[#0773ff]' placeholder='Write profile bio' required name="" id=""></textarea>
          <button type='submit' className='border-none text-white
          bg-[#077eff] p-[8px] text-[16px] cursor-pointer' >Save</button>

        </form>
        <img className='profile-pic max-w-[160px]
        my-[20px] mx-auto rounded-[50%]  ' src={image?URL.createObjectURL(image):assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfileUpdate