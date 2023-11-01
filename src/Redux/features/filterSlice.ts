import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobListing } from "../../types";
import JobData from "../../../public/assets/data.json";

export interface vacancyList {
  data: JobListing[];
  filteredData: Array<JobListing>;
}

const initialState: vacancyList = {
  data: JobData,
  filteredData: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setFilterTerm: (state, action) => {
      const searchTerm = action.payload;
      if (searchTerm.trim() === "") {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter((job) =>
          job.company.includes(searchTerm)
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobs, setFilterTerm } = filterSlice.actions;

export default filterSlice.reducer;
