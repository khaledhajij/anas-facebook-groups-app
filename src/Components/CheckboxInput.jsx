import { Checkbox } from 'primereact/checkbox'
import React, { useState } from 'react'

const CheckboxInput = (props) => {
    const [checked, setChecked] = useState(false)
    const toggleCheckboxes = id => {
      const corrRow = props.groups.find(row => row.id === id)
      setChecked(preValue => !preValue)
      props.setSelectedRows(preArray => {
        return !checked ? [...preArray, corrRow] : preArray.filter(e => e.id !== id)
      })
    }
    return (
      <Checkbox
        onChange={() => toggleCheckboxes(props.rowData.id)}
        checked={checked}
      ></Checkbox>
    )
  }


export default CheckboxInput