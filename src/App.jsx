 import React from 'react'
 import {Route,Routes} from 'react-router-dom'
 import Login from "./pages/Login";
 import Chat from "./pages/Chat"
 import UpdateProfile from "./pages/ProfileUpdate"
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 
 const App = () => {
   return (
     <>
     <ToastContainer/>
     <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/profile' element={<UpdateProfile/>} />
     </Routes>
     </>
   )
 }
 
 export default App