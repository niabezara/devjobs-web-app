import React, { useState } from "react";
import Filter from "./Filter";
import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "@/Redux/features/loadSlice";

export default function HomeCard() {
  return (
    <main className="Main">
      <Filter />
      <JobCard />
    </main>
  );
}
