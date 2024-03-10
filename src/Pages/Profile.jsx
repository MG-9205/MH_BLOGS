import React, { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Mail } from "lucide-react";
import { db } from "../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import userContext from "../Context/userContext/userContext";
import BigCard from "../Component/BigCard";

export default function Profile() {
  const userid = useContext(userContext);
  const [blogs,setBlogs]=useState([])
  const username = userid?.User;
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const DB_REF = collection(db, "BLOG_DATA");
        const q = query(DB_REF, where("username", "==", username));
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = [];
        querySnapshot.forEach((doc) => {
          fetchedBlogs.push(doc.data());
        });
        setBlogs(fetchedBlogs);  
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    if (username) {
      fetchBlogs();
    }
  }, []); 
  return (

    <>
    
    {
      userid.User==""&& <div className="flex justify-center items-center h-[100vh]">
        <Link to='/LoginPage' className="bg-blue-500 text-white text-[1.3rem] px-7 py-3 rounded-[10px]">Login</Link>
      </div>
    }
    {userid.User!=''&&
      <div>
      <div className="flex justify-center flex-col items-center gap-4 md:flex-row mt-8">
        <div
          className="h-[100px] w-[100px] bg-blue-500 text-[4.5rem] text-white text-center rounded-[50%] flex justify-center items-center">
          <p className="text-center pb-4">{username[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center md:items-start text-[1.1rem] font-medium">
          <span className="flex gap-2 items-center">
            <User />: {username}
          </span>
          <span className="flex gap-2 items-center">
            <Mail /> : {`${username}@gmail.com`}
          </span>
          <span>Total Blogs: {blogs.length}</span>
        </div>
      </div>
      <div className="mt-8 pb-10">
        <div className="text-center font-Satisfy text-[2.5rem] text-blue-500 md:text-left md:pl-9">
          Your Blogs
        </div>
        <div className="flex flex-col gap-8 mt-4">
        {blogs.length > 0 && (
  blogs.map((blog, index) => (
    <BigCard 
      key={index} 
      Username={blog.username} 
      date={blog.date} 
      category={blog.Category}
      imgurl={blog.url}
      title={blog.Title}
      content={blog.content}
    />
  ))
)}
        </div>
      </div>  
      </div>
      }
    </>
  );
}
