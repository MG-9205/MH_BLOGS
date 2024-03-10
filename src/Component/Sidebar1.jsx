import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import image1 from "../assets/image/Group 196.png";
import React, { useContext } from "react";
import mhBlogContext from "../Context/mhBlogContext";

export default function Sidebar1() {
  const Sidebar1 = useContext(mhBlogContext);
  return (
    <>
      <div
        className={`fixed z-10 font-Montserrat bg-white border-r-2 h-[100vh] w-[90wv] ${Sidebar1.SideWidth} overflow-hidden md:w-[26vw] md:translate-x-[0%] transition-all duration-[2s]`}
      >
        <div className="">
          <ul className="flex flex-col gap-3 justify-start items-start pl-6 pt-5 text-[1.1rem] font-semibold">
            <li>
              <Link className="hover:text-blue-400 link">Home</Link>
            </li>
            <li className="hover:text-blue-400 link">
              <Link to="/Profile">View Profile</Link>
            </li>
            <li className="hover:text-blue-400 link">
              <Link to="/CreateBlog">Create Blog</Link>
            </li>
            <li className="hover:text-blue-400 link">
              <a href="https://linktr.ee/manishgupta_31" target="_blank">
                Contact me
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start pl-6 mt-2 ">
          <div className="h-[200px] w-[300px] mb-5">
            <img src={image1} alt="" className="h-[200px] w-[300px]" />
          </div>
          <div className="text-[1rem] mb-3 text-black font-semibold">
            Subscribe for newsletter
          </div>
          <div className="flex gap-3 border-2 border-blue-400 px-2 py-4 w-[18rem] h-[3rem] justify-center items-center">
            <div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email "
                className="text-[1.1rem] border-none outline-none"
              />
            </div>
            <div className="flex justify-center items-center pr-2">
              <Send className="text-[#837e7e] h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="flex items-start pl-6 mt-4 text-[0.9rem]">
          <span className="w-[20rem] text-left">
            Copyright ©2024 All rights reserved | This website is made with by
            Manish Gupta
          </span>
        </div>
      </div>
    </>
  );
}
