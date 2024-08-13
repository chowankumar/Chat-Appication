import { createContext, useState } from "react";

export const  AppContext = createContext();

const AppContextProvider = (props)=>{

    const [userData,setUserData] = useState(null);
    const[chatData,setChatData] = useState(null);


    const value ={

    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}