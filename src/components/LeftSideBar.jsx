import React from 'react'
import assets from "./../assets/assets"
import { useNavigate } from 'react-router-dom'

const LeftSideBar = () => {

    const navigate = useNavigate();
    
    return (
        <div className='bg-[#001030]
         text-white h-[75vh]'>

            <div className="p-[20px]">
                <div className="flex justify-between items-center">
                    <img src={assets.logo} alt="" className='max-w-[140px]' />
                    <div className='menu relative py-[10px]'>
                        <img src={assets.menu_icon} alt=""  
                        className='max-h-[20px] opacity-[0.6] cursor-pointer'/>
                        <div className="sub-menu absolute top-[100%] right-0 w-[130px] p-[20px]
                        rounded-[5px] bg-white text-black hidden">
                            <p 
                            onClick={()=>navigate('/profile')}
                            className='cursor-pointer text-[14px]'>Edit Profile</p>
                            <hr className='border-none h-[1px] bg-[#a4a4a4] my-[8px]'/>
                            <p className='cursor-pointer text-[14px]'>Logout</p>

                        </div>
                    </div>
                </div>

                <div 
                className="bg-[#002670] 
                flex items-center gap-[10px] 
                p-2 mt-[20px]">
                    <img src={assets.search_icon} alt="" width="16px" />
                    <input type="text" placeholder='Search here..'
                    className='bg-transparent border-none outline-none text-[11px]' />
                </div>
            </div>
            <div className="flex flex-col gap-4 h-[70%] overflow-y-scroll">
                {
                    Array(12).fill("").map((item,index)=>(
                        <div key={index} className="flex items-center gap-3 p-y-[10px] pl-5 cursor-pointer text-[13px] hover:bg-[#077EFF]">
                        <img src={assets.profile_img} alt="" className='w-[35px]
                        aspect-[1/1] rounded-[50%]' />
                        <div className='flex flex-col'>
                            <p>Chowan Kumar</p>
                            <span>Hello, How are you?</span>
                        
                        </div>
                    </div>
                    ))
                }


            </div>
        </div>
    )
}

export default LeftSideBar