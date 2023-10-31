import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobListing } from "../../types";
import data from "../../../public/assets/data.json";

export interface vacancyList {
  data: JobListing[];
  visibleJobs: number;
}

const initialState: vacancyList = {
  data: [],
  visibleJobs: 9,
};

export const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    loadMore: (state: vacancyList) => {
      state.visibleJobs += 9;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMore } = loadSlice.actions;

export default loadSlice.reducer;
