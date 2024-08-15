import React, { useContext, useEffect, useState } from 'react'
import assets from "./../assets/assets"
import { AppContext } from '../context/AppContext'
import { onSnapshot, doc, updateDoc, getDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../config/firebase';


const ChatBox = () => {

  const { userData, messagesId, chatUser, messages, setMessages } = useContext(AppContext);

  const [input, setInput] = useState("");


  //fecth the messages related to this messageId
  useEffect(() => {
    if (messagesId) {
      const unSub = onSnapshot(doc(db,'messages', messagesId), (res) => {
        setMessages(res.data().messages.reverse())
      })
      return () => {
        unSub()
      }
     }
  }, [messagesId])



  //send messages function
  const sendMessage = async () => {

    try {
      if (input && messagesId) {


        await updateDoc(doc(db,'messages', messagesId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date()
          })

        })

        const userIDs = [chatUser.rId, userData.id];

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messagesId);
            userChatData.chatsData[chatIndex].lastMessage = input.slice(0,30);
            userChatData.chatsData[chatIndex].updatedAt = Date.now();

            if (userChatData.chatsData[chatIndex].rId === userData.id) {
              userChatData.chatData[chatIndex].messageSeen = false;
            }
            await updateDoc(userChatsRef, {
              chatsData: userChatData.chatsData
            })

          }
        })
      }


 


    } catch (error) {
      console.log(error)

    }
    setInput("");

  }

    //show the time am and pm

    const convertTimesstamp =(timestamp)=>{
      let date = timestamp.toDate();
      const hour = date.getHours();
      const minute = date.getMinutes();
      if(hour > 12){
          return hour-12 + ":" + minute + " PM"
      }else{

          return hour + ":" + minute + " AM"
      }

  }


  ///send image function
  const sendImage = async()=>{
    try {

      const fileUrl = await upload(e.target.files[0]);

      if(fileUrl && messagesId){
        await updateDoc(doc(db,'messages',messagesId),{
          messages: arrayUnion({
              sId:userData.id,
              image:fileUrl,
              createdAt : new Date()
            })
        })
      }


      const userIDs = [chatUser.rId, userData.id];

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messagesId);
            userChatData.chatsData[chatIndex].lastMessage = "image send";
            userChatData.chatsData[chatIndex].updatedAt = Date.now();

            if (userChatData.chatsData[chatIndex].rId === userData.id) {
              userChatData.chatData[chatIndex].messageSeen = false;
            }
            await updateDoc(userChatsRef, {
              chatsData: userChatData.chatsData
            })

          }
        })

      
      
    } catch (error) {
      console.log(error)
      
    }
  }

   


  return chatUser ? (
    <div className='h-[75vh] relative
     bg-[#f1f5ff]'>

  

      <div className='py-[10px] px-[15px] flex gap-2 items-center border border-b-[#c6c6c6]'>
        <img src={chatUser.userData.avatar} alt=""
          className='w-[40px] rounded-[50%]' />
        <p className='flex-1 font-[500] text-[20px]
        text-[#393939] flex items-center gap-[5px]'>{chatUser.userData.name} <img src={assets.green_dot} alt="" className='onlien-dot' /></p>
        <img src={assets.help_icon} alt="" className='w-[25px]' />
      </div>
       


      <div className="h-[calc(100%-70px)] pb-[50px]
      overflow-y-scroll flex flex-col-reverse gap-5 ">  
              
        {messages.map((msg,index) => (
          <div
            key={index}
            className={msg.sId === userData.id ? "s-msg":"r-msg"}>
            <p className="text-white bg-[#077eff]
            p-[8px] max-w-[200px] text-[11px]
             font-[300] rounded-t-[5px]  rounded-l-[5px]
             ">{msg.text}</p>
            <div>
              <img className='w-[27px] rounded-[50px]' src={msg.sId === userData.id ? userData.avatar: chatUser.userData.avatar} alt="" />
              <p className='text-center text-[9px]'>{convertTimesstamp(msg.createdAt)}</p>
            </div>
          </div>


        ))}

      </div>



      <div className='flex items-center gap-[12px]
      py-[10px] px-[15px] bg-white absolute left-0 right-0 bottom-0'>

        <input
          type="text"
          placeholder='Send a message' className='flex-1 border-none outline-none'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <input type="file" id='image' accept='image/png, image/jpeg' hidden
        />

        <label htmlFor="image" className='flex '>
          <img src={assets.gallery_icon} alt="" className='w-[22px] cursor-pointer' />
        </label>

        <img 
        onClick={sendMessage} 
        src={assets.send_button} 
        alt="" 
        className='w-[32px] cursor-pointer' />

      </div>
    </div>
  )
    : <div className='chat-welcome w-[100%] flex flex-col items-center justify-center gap-[5px] text-white'>
      <img src={assets.logo_icon} alt="" width="60px" />
      <p className='text-[20px] font-[500] text-[#383838]'>Chat anytime, anywhere</p>

    </div>
}

export default ChatBox