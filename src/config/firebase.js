import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import {doc} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAtlTdls35Jxb3-IrzpUR62ZR9o-Kb4EIg",
  authDomain: "chat-app-27532.firebaseapp.com",
  projectId: "chat-app-27532",
  storageBucket: "chat-app-27532.appspot.com",
  messagingSenderId: "17379496746",
  appId: "1:17379496746:web:ca332a1ca4f8d7b4ffc453"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



//signup method create new account

const signup= async(username,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey there i am using chat app",
            lastSeen:Date.now()
        })

        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))

        
    }

}

const Login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}

const logout = async()=>{
    try {
        await signOut(auth)
        
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
   
}

export {signup,Login,logout,auth,db}

