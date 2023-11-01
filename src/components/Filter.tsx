import React from "react";

export default function Filter() {
  return (
    <div className="bg-white dark:bg-[#19202d] rounded-lg h-[80px] mt-[-4rem] px-4 w-[95%] dark-mode:bg-black flex justify-between">
      <form action="" className="flex items-center w-full justify-between">
        <label className="flex items-center gap-2 md:flex md:border-r-[0.1px] md:border-[#6e809899] md:h-full ">
          <img src="/assets/desktop/icon-search.svg" alt="" className="icons" />
          <input
            className="w-full bg-transparent flex-grow-0 p-2.5 focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Filter by title..."
          />
        </label>
        <label className=" hidden invisible items-center gap-2 md:flex md:visible md:items-center  md:border-r-[0.1px] md:border-[#6e809899] md:h-full">
          <img
            src="/assets/desktop/icon-location.svg"
            alt=""
            className="icons"
          />
          <input
            className=" w-full bg-transparent focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Filter by title..."
          />
        </label>
        <label className="h-full hidden invisible md:flex md:visible md:items-center md:gap-3 font-bold">
          <input
            className="w-0 h-0 bg-transparent"
            type="check"
            name=""
            id=""
          />
          <span className="w-5 h-5 bg-[#e7e8e9] dark:bg-[#313743]"></span>
          Full time
        </label>
        <div className="flex items-center gap-1">
          <button className="bg-inherit min-w-[48px] min-h-[48px] flex items-center justify-center rounded-md md:hidden">
            <img src="/assets/mobile/icon-filter.svg" alt="" />
          </button>
          <button className="bg-[#5964e0] min-w-[48px] min-h-[48px] flex items-center justify-center rounded-md">
            <img src="/assets/mobile/icon-search.svg" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
