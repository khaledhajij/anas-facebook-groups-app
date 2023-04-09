import { createSlice } from '@reduxjs/toolkit'
import ErrorToast from './Components/Toasts/ErrorToast'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      const categoriesNames = state.map(category => category.name)
      if (categoriesNames.includes(action.payload.category.name)) {
        return <ErrorToast />
      }
      state.push(action.payload.category)
    },
    categoryCheckboxChecked: (state, action) => {
      return state.map(category =>
        category.id === action.payload.id
          ? { ...category, selected: !category.selected }
          : category
      )
    },
    categoryDeleted: (state, action) => {
      return state.filter(category => category.id !== action.payload.id)
    }
  }
})
export default categoriesSlice.reducer
export const categoriesSelector = state => state.categories
export const { addCategory, categoryCheckboxChecked, categoryDeleted } =
  categoriesSlice.actions
