import React, { useContext, useState } from 'react'
import assets from "./../assets/assets"
import { useNavigate } from 'react-router-dom'
import { collection, query,where,getDocs } from 'firebase/firestore';
import { db } from "../config/firebase"
import { AppContext } from "./../context/AppContext"

const LeftSideBar = () => {

    const navigate = useNavigate();
    const { userData } = useContext(AppContext);
    const [user, setUser] = useState(null);
    const [showSearch, setShowSearch] = useState(false);


    const inputHandler = async (e) => {
       
        try {
            const input = e.target.value;
            if (input) {
                setShowSearch(true);
                const userRef = collection(db, 'users');
                const q = query(userRef,where("username", "==", input.toLowerCase()));
                const querySnap = await getDocs(q);
                if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id ) {
                   
                setUser(querySnap.docs[0].data())

                } else {
                    setUser(null)
                }
            } else {
                setShowSearch(false)
            }

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className='bg-[#001030]
         text-white h-[75vh]'>

            <div className="p-[20px]">
                <div className="flex justify-between items-center">

                    <img src={assets.logo} alt="" className='max-w-[140px]' />
                    <div className='menu relative py-[10px]'>

                        <img src={assets.menu_icon} alt=""
                            className='max-h-[20px] opacity-[0.6] cursor-pointer' />
                        <div className="sub-menu absolute top-[100%] right-0 w-[130px] p-[20px]
                        rounded-[5px] bg-white text-black hidden">
                            <p
                                onClick={() => navigate('/profile  ')}
                                className='cursor-pointer text-[14px]'>Edit Profile</p>
                            <hr className='border-none h-[1px] bg-[#a4a4a4] my-[8px]' />
                            <p className='cursor-pointer text-[14px]'>Logout</p>

                        </div>
                    </div>
                </div>

                <div
                    className="bg-[#002670] 
                flex items-center gap-[10px] 
                p-2 mt-[20px]">
                    <img
                        src={assets.search_icon} alt=""
                        width="16px"
                    />
                    <input
                        onChange={inputHandler}
                        type="text" placeholder='Search here..'
                        className='bg-transparent border-none outline-none text-[11px]' />
                </div>
            </div>
            <div className="flex flex-col gap-4 h-[70%] overflow-y-scroll">
                {showSearch && user ? <div className='friends add-user 
                flex items-center gap-3 p-y-[10px] pl-5 cursor-pointer text-[13px] hover:bg-[#077EFF]'>
                    <img
                        src={user.avatar}
                        className='w-[35px]
                    aspect-[1/1] rounded-[50%]' />
                    <p>{user.name}</p>

                </div> : <></> }
                     {/* Array(12).fill("").map((item, index) => (
                    //     <div key={index} className="flex items-center gap-3 p-y-[10px] pl-5 cursor-pointer text-[13px] hover:bg-[#077EFF]">
                    //         <img
                    //             src={assets.profile_img} alt="" className='w-[35px]
                    //                     aspect-[1/1] rounded-[50%]' />
                    //         <div className='flex flex-col'>
                    //             <p>Chowan Kumar</p>
                    //             <span>Hello, How are you?</span>

                    //         </div>
                    //     </div>
                    //  */}



            </div>
        </div>
    )
}

export default LeftSideBar