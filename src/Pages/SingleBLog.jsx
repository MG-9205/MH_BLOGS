import React from "react";
import { useContext } from "react";
import sidebar1Context from "../Context/mhBlogContext";
import { CalendarRange, User, Folder } from "lucide-react";
import { Link } from "react-router-dom";

export default function SingleBLog() {
  const { currentBlog } = useContext(sidebar1Context);
  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8 mb-8">
        <div className="flex flex-col gap-5 w-[90%] justify-center items-center">
          <div className="text-[2rem] font-Montserrat font-semibold underline">
            {currentBlog.title}
          </div>
          <div className="flex justify-center items-center">
            <img
              src={currentBlog.imgurl}
              alt=""
              className="h-[90%] w-[90%] object-contain"
            />
          </div>

          <div className=" border-b-2 border-blue-500 pb-5 ">
            <p className="text-[1.2rem] font-Montserrat">
              {currentBlog.content}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-[90%]">
            <span className="flex gap-5 justify-center items-center text-[20px]">
              <CalendarRange className="h-5 w-5" />
              {currentBlog.date}
            </span>
            <span className="flex gap-5 justify-center items-center text-[20px]">
              <User className="h-5 w-5" />
              {currentBlog.Username}
            </span>
            <span className="flex gap-5 justify-center items-center text-[20px]">
              <Folder className="h-5 w-5" />
              {currentBlog.category}
            </span>
          </div>
          <div className="text-[1.3rem] font-semibold text-blue-500">
            <Link to="/" onClick={handleBack}>
              &lt;&lt; BACK
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
