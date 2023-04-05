import { Checkbox } from 'primereact/checkbox'
import React, { useEffect, useState } from 'react'

const CheckboxInput = props => {
  const [checked, setChecked] = useState(props.rowData.selected)
  const toggleCheckboxes = id => {
    const corrRow = props.groups.find(row => row.id === id)
    setChecked(preValue => !preValue)
  }
  return (
    <Checkbox
      onChange={() => toggleCheckboxes(props.rowData.id)}
      checked={checked}
    ></Checkbox>
  )
}

export default CheckboxInput
