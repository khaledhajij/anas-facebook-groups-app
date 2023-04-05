import { combineReducers, configureStore } from '@reduxjs/toolkit'
import groupsSlice from './groupsSlice'
import categoriesSlice from './CategoriesSlice'

const reducer = combineReducers({
  groups: groupsSlice,
  categories: categoriesSlice
})
const store = configureStore({ reducer })

export default store
