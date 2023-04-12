import { createSlice } from '@reduxjs/toolkit'
import groupsData from './data'

const groupsSlice = createSlice({
  name: 'groups',
  initialState: groupsData,
  reducers: {
    groupSelected: (state, action) => {
      if (action.payload.id !== 'all') {
        return state.map(group => {
          return group.id !== action.payload.id
            ? group
            : { ...group, selected: !group.selected }
        })
      } else {
        return state.map(group => {
          return { ...group, selected: !group.selected }
        })
      }
    },
    categorySelected: (state, action) => {
      return state.map(group =>
        !action.payload.includes(group.id)
          ? group
          : { ...group, selected: true }
      )
    },
    categoryUnselected: (state, action) => {
      console.log(action.payload)
      return state.map(group =>
        !action.payload.includes(group.id)
          ? group
          : { ...group, selected: false }
      )
    }
  }
})

export default groupsSlice.reducer
export const groupsSelector = state => state.groups
export const selectedGroupsSelector = state =>
  state.groups.filter(group => group.selected)
export const { groupSelected, categorySelected, categoryUnselected } =
  groupsSlice.actions
