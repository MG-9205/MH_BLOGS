import LoginContext from "./LoginContext";
import { useState } from "react";
const LoginState=(props)=>{
    const [Active,Controller]=useState('Login');
    const[userCredentials,setUserCredentials]=useState({})
   

 return(
    <>
    <LoginContext.Provider value={{Active,Controller,userCredentials,setUserCredentials}}>
     {props.children}
    </LoginContext.Provider>
    </>
 )
}
export default LoginState
