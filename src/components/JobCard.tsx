"use client";
import React, { useState } from "react";
import JobData from "../../public/assets/data.json";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "@/Redux/features/loadSlice";

export default function JobCard() {
  const [visible, setvisible] = useState(JobData.slice(0, 9));
  const handler = () => {
    const newArrow = [...visible];
    const load = newArrow.push(
      ...JobData.slice(newArrow.length, newArrow.length + 9)
    );
    setvisible(newArrow);
    console.log(newArrow.length);
  };

  return (
    <div className="w-full items-center flex flex-col justify-center">
      {visible.map((job: any) => (
        <article
          key={job.id}
          className="bg-white flex flex-col mt-9 p-8 rounded-md gap-3.5 relative w-full"
        >
          <div
            className="h-[50px] w-[50px] flex items-center justify-center rounded-[15px] absolute top-[-23px]"
            style={{ backgroundColor: job.logoBackground }}
          >
            <img src={job.logo} alt="" />
          </div>
          <div className="flex items-center mt-3">
            <p className="text-sm after:content-['.'] after:p-2 after:text-center text-[#6e8098]">
              {job.postedAt}
            </p>
            <p className="text-[#6e8098] text-sm">{job.contract}</p>
          </div>
          <h1 className="font-bold text-base">{job.position}</h1>
          <h4 className="text-[#6e8098] text-sm">{job.company}</h4>
          <p className="text-[#5964e0] font-bold text-sm">{job.location}</p>
        </article>
      ))}
      <button
        onClick={handler}
        className="bg-[#5964e0] text-white px-6 py-3 rounded-lg mt-8 mb-10 font-bold"
      >
        Load More
      </button>
    </div>
  );
}
