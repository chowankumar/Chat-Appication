 import React from 'react'
 import {Route,Routes} from 'react-router-dom'
 import Login from "./pages/Login";
 import Chat from "./pages/Chat"
 import UpdateProfile from "./pages/ProfileUpdate"
 
 const App = () => {
   return (
     <>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/profile' element={<UpdateProfile/>} />
     </Routes>
     </>
   )
 }
 
 export default App