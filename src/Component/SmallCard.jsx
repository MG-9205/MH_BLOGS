import React from "react";
import { CalendarRange, User } from "lucide-react";

export default function SmallCard(props) {
  const example = {
    user: "Manish Gupta",
    discription: "Even the all-powerful Pointing has no control",
    date: "12-12-12"
  };
  return (
    <>
     <div className="flex gap-4 px-4 md:h-[100px]  items-center md:w-[320px]">
  <div className="h-[6rem] w-[5rem] flex-shrink-0">
    <img
      className="h-full w-full object-cover"
      src={props.image}
      alt=""
    />
  </div>
  <div className="flex flex-col gap-3 justify-center">
    <div className="text-left font-Montserrat text-[1rem] font-medium text-black">
      {props.discription}
    </div>
    <div className="flex gap-4">
      <span className="flex gap-1 items-center text-[12px]">
        <CalendarRange className="h-5 w-5" />
        {example.date}
      </span>
      <span className="flex gap-1 items-center text-[12px]">
        <User className="h-5 w-5" />
        {example.user}
      </span>
    </div>
  </div>
</div>

    </>
  );
}
