import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobListing } from "../../types";
import JobData from "../../../public/assets/data.json";

export interface vacancyList {
  visible: JobListing[];
}

const initialState: vacancyList = {
  visible: JobData.slice(0, 9),
};

export const loadSlice = createSlice({
  name: "load",
  initialState,
  reducers: {
    loadMore: (state) => {
      const newVisible = [...state.visible];
      const startIndex = newVisible.length;
      const endIndex = startIndex + 4;
      newVisible.push(...JobData.slice(startIndex, endIndex));
      state.visible = newVisible;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadMore } = loadSlice.actions;

export default loadSlice.reducer;
