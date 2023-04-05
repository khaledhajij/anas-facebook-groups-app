import { createSlice } from '@reduxjs/toolkit'
import groupsData from './data'

const groupsSlice = createSlice({
  name: 'groups',
  initialState: groupsData,
  console: state => {
    console.log(state)
  }
})

export default groupsSlice.reducer
export const { console } = groupsSlice.actions
export const groupsSelector = state => state.groups
export const selectedGroupsSelector = state => state.groups.filter(group => group.selected)