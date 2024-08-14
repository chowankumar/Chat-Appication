import React, { useContext, useState } from 'react'
import assets from "./../assets/assets"
import { useNavigate } from 'react-router-dom'
import { collection, query, where, getDocs, serverTimestamp, updateDoc, doc, setDoc, arrayUnion } from 'firebase/firestore';
import { db } from "../config/firebase"
import { AppContext } from "./../context/AppContext"

const LeftSideBar = () => {

    const navigate = useNavigate();
    const {
        userData, chatData,
        messages, setMessages,
        messageId, setMessageId,
        chatUser, setChatUser
    } = useContext(AppContext);

    const [user, setUser] = useState(null);
    const [showSearch, setShowSearch] = useState(false);


    const inputHandler = async (e) => {


        try {
            const input = e.target.value;
            if (input) {
                setShowSearch(true);
                const userRef = collection(db, 'users');
                const q = query(userRef, where("username", "==", input.toLowerCase()));
                const querySnap = await getDocs(q);
                if (!querySnap.empty && querySnap.docs[0].data().id !== userData.id) {
                    let userExist = false;
                    chatData.map((user) => {
                        if (user.rId == querySnap.docs[0].data().id) {
                            userExist = true
                        }
                    })
                    if (!userExist) {
                        setUser(querySnap.docs[0].data())

                    }

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

    //addchat
    const addChat = async () => {
        const messageRef = collection(db,"messages");
        const chatRef = collection(db,"chats");
        try {
            const newMessageRef = doc(messageRef);

            await setDoc(newMessageRef, {
                createdAt: serverTimestamp(),
                messages: []
            })

            await updateDoc(doc(chatRef, user.id), {
                chatData: arrayUnion({
                    messageId:newMessageRef.id,
                    lastMessage:"",
                    rId: userData.id,
                    updatedAt: Date.now(),
                    messageSeen: true
                })
            })
            await updateDoc(doc(chatRef, userData.id), {
                chatData: arrayUnion({
                    messageId: newMessageRef.id,
                    lastMessage: "",
                    rId: user.id,
                    updatedAt: Date.now(),
                    messageSeen: true
                })
            })
        } catch (error) {

            console.error(error)

        }

    }

    
    //set the chat on which we click



    const setChat = (item) => {
        setMessageId(item.messageId);
        setChatUser(item);
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
                flex items-center gap-3 p-y-[10px] pl-5 cursor-pointer text-[13px] hover:bg-[#077EFF]'
                    onClick={addChat}>
                    <img
                        src={user.avatar}
                        className='w-[35px]
                    aspect-[1/1] rounded-[50%]' />
                    <p>{user.name}</p>

                </div> :
                    chatData.map((item, index) => (
                        <div onClick={() => setChat(item)}
                            key={index} className="flex items-center gap-3 p-y-[10px] pl-5 cursor-pointer text-[13px] hover:bg-[#077EFF]">
                            <img
                                src={item.userData.avatar} alt="" className='w-[35px]
                                        aspect-[1/1] rounded-[50%]' />
                            <div className='flex flex-col'>
                                <p>{item.userData.name}</p>
                                <span>{item.lastMessage}</span>
                                

                            </div>
                        </div>))
                }

            </div>
        </div>
    )
}

export default LeftSideBar