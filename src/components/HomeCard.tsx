import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import JobCard from "./JobCard";

export default function HomeCard() {
  return (
    <main className="Main">
      <Filter />
      <JobCard />
    </main>
  );
}
