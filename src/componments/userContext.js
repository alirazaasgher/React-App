import React,{createContext, useState} from 'react'
export const UserContext = createContext();

export const UserProvider = props =>{
    const checkUserLogin = localStorage.getItem("userID") ? localStorage.getItem("userID") : false 
    const[userLogin,setLogin] = useState(checkUserLogin)
return <UserContext.Provider value = {[userLogin,setLogin]}>{props.children}</UserContext.Provider>
}