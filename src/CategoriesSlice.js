import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {}
})
export default categoriesSlice.reducer
export const categoriesSelector = state => state.categories