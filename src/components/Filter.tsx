import React from "react";

export default function Filter() {
  return (
    <div className="bg-white rounded-lg h-[80px] mt-[-3rem] px-4 w-[95%]">
      <form action="" className="flex items-center h-full">
        <div className="h-full">
          <input
            className="h-full w-[18ch]"
            type="text"
            name=""
            id=""
            placeholder="Filter by title..."
          />
        </div>
        <div className="flex items-center gap-1">
          <button className="bg-inherit min-w-[48px] min-h-[48px] flex items-center justify-center rounded-md">
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
