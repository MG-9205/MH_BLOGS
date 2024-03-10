import { useContext } from "react";
import { CalendarRange, User,Folder  } from "lucide-react";
import sidebar1Context from "../Context/mhBlogContext";
import { useNavigate } from "react-router-dom";


export default function BigCard(props) {
  const  { setBlog }=useContext(sidebar1Context)
  const Navigate=useNavigate();
  const handleReadME=()=>{
   setBlog(props)
   window.scrollTo({ top: 0, behavior: 'smooth' });
   Navigate('/SingleBlog')

  }
  return (
    <>
    <div className='flex justify-center items-center gap-4 flex-col md:flex-row md:gap-2 md:mx-5 md:w-[600px] md:h-[280px] ' >
        <div className='flex justify-center items-center md:w-[30%]'>
          <img src={props.imgurl} alt="" className='rounded-[50%] h-[12rem] w-[12rem] md:h-[10rem] md:w-[10rem]' />
        </div>
        <div className='flex justify-center items-center gap-4 flex-col md:w-[80%]'><div className='text-[1.6rem] font-Montserrat font-medium md:text-[1.5rem] text-center' >{props.title}</div>
        <div className='flex gap-4 justify-center items-center'>
          <span className="flex gap-1 justify-center items-center text-[14px]">
            <CalendarRange className="h-5 w-5" />
            {props.date}
          </span>
          <span className="flex gap-1 justify-center items-center text-[14px]">
            <User className="h-5 w-5" />
            {props.Username}
          </span>
          <span className="flex gap-1 justify-center items-center text-[14px]">
          <Folder className="h-5 w-5" />
          {props.category}
          </span>
        </div>
        <div className='text-[1.5rem] font-Satisfy  text-center px-5 md:text-[1.3rem]' >
        {props.content.substring(0, 70)}....
        </div>
        <div>
          <button className='text-blue-500 text-[1.5rem] md:text-[1.2rem]'  onClick={handleReadME}>Read more &gt;</button>
        </div>
        {props.remove=='true'&&<div className='flex justify-end w-[100%]'>
          <button className='text-white text-[1.1rem] font-semibold bg-red-600 rounded-[7px] px-9 py-1'>delete</button>
        </div>}
        </div>
      </div>
    </>
  )
}
