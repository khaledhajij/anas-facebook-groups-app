import { Checkbox } from 'primereact/checkbox'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groupSelected, groupsSelector } from '../groupsSlice'

const CheckboxInput = props => {
  const dispatch = useDispatch()
  const groups = useSelector(groupsSelector)
  const matchingGroup = groups.find(group => group.id === props.rowData.id)
  return (
    <Checkbox
      onChange={() => dispatch(groupSelected({ id: props.rowData.id }))}
      checked={matchingGroup.selected}
    ></Checkbox>
  )
}

export default CheckboxInput
