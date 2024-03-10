import React, { useContext } from "react";
import { Search, Linkedin, X, Github } from "lucide-react";
import { Link } from "react-router-dom";
import SmallCard from "./SmallCard";
import NewsLetterBg from "../assets/image/NewsLetterBg.jpg";
import sidebar1Context from "../Context/mhBlogContext";

export default function Sidebar2() {
  const { setFilter } = useContext(sidebar1Context);
  const handleme = (e) => {
    const category = e.target.textContent;
    setFilter(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="mb-10 pt-10 bg-slate-300 px-3">
        <div className="flex justify-center items-center">
          <div className="flex border-2 border-gray-400 justify-center items-center h-14 w-[90%] px-3">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter The keyword"
              className="text-[1.2rem] outline-none w-[100%] bg-transparent"
            />
            <Search className="text-gray-400" />
          </div>
        </div>
        <div className="mt-8">
          <div className="text-[2rem] font-Satisfy text-left pl-6">
            Categories
          </div>
          <div className="">
            <ul className="flex flex-col gap-4 items-start px-4 mt-4 text-[1.3rem] font-Montserrat font-medium text-gray-800">
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 pb-3">
                <Link onClick={(e) => handleme(e)}>ALL</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 pb-3">
                <Link onClick={(e) => handleme(e)}>Fashion</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 py-2">
                <Link onClick={(e) => handleme(e)}>Sports</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 py-2 ">
                <Link onClick={(e) => handleme(e)}>Technology</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 py-2">
                <Link onClick={(e) => handleme(e)}>Food</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 py-2">
                <Link onClick={(e) => handleme(e)}>Travel</Link>
              </li>
              <li className="border-b-[1px] border-b-gray-400 w-full text-left pl-2 py-2">
                <Link onClick={(e) => handleme(e)}>literature</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <div className="font-Satisfy text-left pl-6 text-[2rem]">
            Popular Articles
          </div>
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className="flex justify-center items-center mt-10">
          <div
            className=" bg-center h-[40vh] w-[95vw] md:h-[380px] md:w-[470px]"
            style={{ backgroundImage: `url(${NewsLetterBg})` }}
          >
            <div className="text-left text-white text-[2rem] font-Satisfy py-2 px-3 font-semibold">
              Newsletter
            </div>
            <div className="text-left text-white text-[1.3rem] font-semibold px-3">
              far far away, behind the word mountains, far from the countries
              Vokalia
            </div>
            <div className="mt-4">
              <div className="px-2">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address"
                  className="outline-none bg-transparent border-2 border-white py-3 px-4 w-full text-[1.2rem]"
                />
              </div>
              <div className="px-2 mt-4">
                <button className="w-full bg-slate-100 h-12 text-[1.3rem]">
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 my-8 text-[1.3rem] font-Satisfy text-center">
          Dive into a world where words dance to illuminate ideas, where
          perspectives collide to spark new understandings, and where knowledge
          thrives in the shared experiences of our diverse community.
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="font-Montserrat text-[2rem] text-left  font-medium">
            Connect With Me!!
          </div>
          <div className="flex justify-center items-center gap-5">
            <a href="https://www.linkedin.com/in/manishgupta31" target="_blank">
              <Linkedin className="h-10 w-10 text-blue-500" />
            </a>
            <a href="https://github.com/MG-9205" target="_blank">
              <Github className="h-10 w-10 text-blue-500" />
            </a>
            <a href="https://twitter.com/Manish_Gupta31" target="_blank">
              <X className="h-10 w-10 text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
