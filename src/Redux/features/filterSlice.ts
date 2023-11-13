import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobListing } from "../../types";
import JobData from "../../../public/assets/data.json";

export interface vacancyList {
  data: JobListing[];
  checked: boolean;
}

const initialState: vacancyList = {
  data: JobData,
  checked: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      const searchInput = action.payload;
      if (searchInput === "") {
        state.data = JobData;
      } else {
        state.data = state.data.filter((job) =>
          job.position.toLowerCase().includes(searchInput.toLowerCase())
        );
      }
    },
    setFilterLocation: (state, action: PayloadAction<string>) => {
      const locationSearch = action.payload;
      if (locationSearch === "") {
        state.data = JobData;
      } else {
        state.data = state.data.filter((job) =>
          job.location.toLowerCase().includes(locationSearch.toLowerCase())
        );
      }
    },
    toggleFullTimeFilter: (state) => {
      state.checked = !state.checked;
      if (state.checked) {
        state.data = state.data.filter((job) => job.contract === "Full Time");
      } else {
        state.data = JobData;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, setFilterLocation, toggleFullTimeFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
