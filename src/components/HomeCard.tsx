import React from "react";
import Filter from "./Filter";
import JobCard from "./JobCard";

export default function HomeCard() {
  return (
    <main className="Main">
      <Filter />
      <JobCard />
      <button className="bg-[#5964e0] text-white px-6 py-3 rounded-lg mt-8 mb-10">
        Load More
      </button>
    </main>
  );
}
