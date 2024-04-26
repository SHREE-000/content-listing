import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  reqPageNo: 0,
  search: "",
  isBackButton: false,
  contents: [],
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addPage: (state) => {
      state.page += 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setReqPageNo: (state, action) => {
      state.reqPageNo = action.payload;
    },
    setBackOperation: (state) => {
      state.isBackButton = !state.isBackButton;
      state.page = 1;
      state.reqPageNo = 0;
      state.search = "";
    },
    setConent: (state, action) => {
      state.contents = action.payload;
    }
  },
});

export const { addPage, setPage, setSearch, setReqPageNo, setBackOperation, setConent } =
  contentSlice.actions;

export default contentSlice.reducer;
