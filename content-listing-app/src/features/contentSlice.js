import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 1
}

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addPage: (state) => {
      state.page += 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
})

export const { addPage, setPage } = contentSlice.actions

export default contentSlice.reducer