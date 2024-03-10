import React, { useContext, useState } from "react";
import logo from "../assets/image/Group 1961.png";
import { CircleUserRound,Send,X,AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import mhBlogContext from "../Context/mhBlogContext"
import userContext from "../Context/userContext/userContext";


export default function Navbar() {
  const Sidebar1=useContext(mhBlogContext)
  const user=useContext(userContext)
  const [icon,iconController]=useState({
    "close":"hidden",
    "menu":" "
  })
  const iconChanger=()=>{
    if(icon.close=="hidden"){
      iconController({
        "close":"",
        "menu":"hidden"
      })
      console.log(Sidebar1)
      Sidebar1.widthController("translate-x-[0%]")
    }
    else{
      iconController({
        "close":"hidden",
        "menu":""
      })
      console.log(Sidebar1)
      Sidebar1.widthController("translate-x-[-100%]")
     
    }
    
   
  }
  function handleLogout(e){
    user.SetUser('')
    alert("Logout Successfully")
  }

  return (
    <>
    <header className='flex justify-between items-center fixed z-10 py-1 px-3 w-[99vw] top-0 bg-white border-b-2 border-b-blue-500 content-box md:w-[100vw]'>
      <div className='md:w-[12rem] w-[10rem] h-14 ml-3  flex gap-1 justify-center items-center'>
        <div><X className={` ${icon.close} md:hidden`} onClick={
          iconChanger
        }/>
        <AlignJustify className={`${icon.menu} md:hidden`} onClick={
          iconChanger
        }/></div>
        <img src={logo} alt="" className='md:w-[12em] w-[10rem] h-14'/>
      </div>
      <div className='flex gap-2 text-[1rem] rounded-[25px] '>
        <div className='flex justify-center items-center pl-2'>
          <CircleUserRound className='h-8 w-8 text-blue-500' />
        </div>
        <div className=' text-blue-500 h-[2rem] w-[5rem] rounded-[25px] flex justify-center items-center border-2 border-blue-500'>
          {!user.User &&<Link to="/LoginPage">login</Link>}
          {user.User &&<Link onClick={(e)=>{handleLogout(e)}} >logOut</Link>}
        </div>
      </div>
    </header>
   
  </>
  );
}
