import React, { useState, useEffect, useRef, useContext } from "react";
import BigCard from "../Component/BigCard";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import sidebar1Context from "../Context/mhBlogContext";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const { Filter } = useContext(sidebar1Context);
  const amount = 54;
  const img_silder = useRef(null);
  const slider_scroller = (amount) => {
    if (img_silder.current) {
      img_silder.current.scrollLeft += amount;
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const DB_REF = collection(db, "BLOG_DATA");
        if (Filter == "ALL") {
          const querySnapshot = await getDocs(DB_REF);
          const fetchedBlogs = [];
          querySnapshot.forEach((doc) => {
            fetchedBlogs.push(doc.data());
          });
          setBlogs(fetchedBlogs);
        } else {
          const q = query(DB_REF, where("Category", "==", Filter));
          const querySnapshot = await getDocs(q);
          const fetchedBlogs = [];
          querySnapshot.forEach((doc) => {
            fetchedBlogs.push(doc.data());
          });
          setBlogs(fetchedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [Filter]);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const remove = "False";
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-8 my-8 min-h-[100vh]">
        {blogs.length > 0 &&
          currentBlogs.map((blog, index) => (
            <BigCard
              key={index}
              Username={blog.username}
              date={blog.date}
              category={blog.Category}
              imgurl={blog.url}
              title={blog.Title}
              content={blog.content}
            />
          ))}
        <div className="flex gap-2 justify-around items-center w-full">
          <div
            className="text-blue-500 text-[2rem] font-bold cursor-pointer"
            onClick={() => slider_scroller(-amount)}
          >
            &lt;&lt;
          </div>
          <ul
            className="flex gap-3 items-center justify-center overflow-auto scrollbar-hide w-[170px] scroll-smooth"
            ref={img_silder}
          >
            {Array.from(
              { length: Math.ceil(blogs.length / blogsPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className="bg-blue-500 text-[1.2rem] font-semibold text-white rounded-[50%] h-[45px] w-[45px]"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          <div
            className="text-blue-500 text-[2rem] font-bold cursor-pointer"
            onClick={() => slider_scroller(amount)}
          >
            &gt;&gt;
          </div>
        </div>
      </div>
    </>
  );
}
