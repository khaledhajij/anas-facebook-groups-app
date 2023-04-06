import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  {
    name: 'fd',
    id: nanoid(),
    categoryGroups: [
      {
        name: 'Group_____4NbEkTtHzFl2oS1uqDNLc',
        id: '4NbEkTtHzFl2oS1uqDNLc',
        members: 132,
        selected: true
      },
      {
        name: 'Group_____tU0b0sFYxE3b5owvCGL60',
        id: 'tU0b0sFYxE3b5owvCGL60',
        members: 264,
        selected: true
      },
      {
        name: 'Group_____l15D1Mbx1eROIc3OaYFbR',
        id: 'l15D1Mbx1eROIc3OaYFbR',
        members: 396,
        selected: true
      }
    ],
    selected: false
  },
  {
    name: 'fdfds',
    id: nanoid(),
    categoryGroups: [
      {
        name: 'Group_____iDMe03nl6QS1jKKg4UGtD',
        id: 'iDMe03nl6QS1jKKg4UGtD',
        members: 528,
        selected: true
      },
      {
        name: 'Group_____ml5DKa3jjCy_GaPe3KRo3',
        id: 'ml5DKa3jjCy_GaPe3KRo3',
        members: 660,
        selected: true
      },
      {
        name: 'Group_____nfMf2BX8uo3AAKvdRYnUD',
        id: 'nfMf2BX8uo3AAKvdRYnUD',
        members: 792,
        selected: true
      },
      {
        name: 'Group_____RdixXXcgfKKOUzikaqjPk',
        id: 'RdixXXcgfKKOUzikaqjPk',
        members: 924,
        selected: true
      }
    ],
    selected: false
  }
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload.category)
    },
    categoryCheckboxChecked: (state, action) => {
      return state.map(category =>
        category.id === action.payload.id
          ? { ...category, selected: !category.selected }
          : category
      )
    }
  }
})
export default categoriesSlice.reducer
export const categoriesSelector = state => state.categories
export const { addCategory, categoryCheckboxChecked } = categoriesSlice.actions
