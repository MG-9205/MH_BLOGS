import React from "react";
import Navbar from "../Component/Navbar";
import Sidebar1 from "../Component/Sidebar1";
import Sidebar2 from "../Component/Sidebar2";
import Sidebar1Sate from "../Context/mhBlogState";
import { Outlet } from "react-router-dom";

export default function Master() {
  return (
    <>
      <Sidebar1Sate>
        <Navbar />
        <section className="grid grid-cols-1 md:grid-cols-4 md:gap-10 relative md:w-[100vw]  overflow-hidden">
          <div className="md:col-span-1 md:relative absolute">
            <Sidebar1 />
          </div>
          <div className="  grid small:grid-rows-1 md:grid-cols-3 md:col-span-3 w-full">
            <div className="md:col-span-2 ">
              <Outlet />
            </div>
            <div className="md:col-span-1 small:row-span-1 bg-slate-300">
              <Sidebar2 />
            </div>
          </div>
        </section>
      </Sidebar1Sate>
    </>
  );
}
