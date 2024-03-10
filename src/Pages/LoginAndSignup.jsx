import React, { useContext } from "react";
import Login from "../Component/Login";
import LoginState from "../Context/LoginContext/LoginState";
import LoginContext from "../Context/LoginContext/LoginContext";

export default function LoginAndSignup() {
  const Active=useContext(LoginContext)
  
  return (
   <>
   <LoginState>
   <div className="flex justify-center items-center">
   <Login/>
   </div>
   </LoginState>
   </>
  );
}
