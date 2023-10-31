import React from "react";
import JobData from "../../public/assets/data.json";

export default function JobCard() {
  return (
    <div>
      {JobData.map((job) => (
        <article className="bg-white flex flex-col mt-9 p-8 rounded-md gap-3.5 relative">
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
    </div>
  );
}
