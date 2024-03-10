import userContext from "./userContext";
import { useState } from "react";
import React from 'react'

const UserState=(props)=> {
    const[User,SetUser]=useState('')
  return (
    <userContext.Provider value={{User,SetUser}}>
         {props.children}
    </userContext.Provider>
  )
}
export default UserState
