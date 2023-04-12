import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  categoriesSelector,
  categoryCheckboxChecked,
  categoryDeleted
} from '../../CategoriesSlice'
import {
  categorySelected,
  categoryUnselected,
  groupsSelector
} from '../../groupsSlice'

const CategoriesTable = () => {
  const dispatch = useDispatch()
  const [expandedRows, setExpandedRows] = useState(null)
  const categories = useSelector(categoriesSelector)
  const groups = useSelector(groupsSelector)
  const rowExpansionTemplate = data => {
    const matchingGroups = data.groupsIds.map(id => {
      const matchingGroup = groups.find(group => group.id === id)
      return matchingGroup
    })
    return (
      <div className='p-3'>
        <h5>Groups in {data.name}</h5>
        <DataTable value={matchingGroups}>
          <Column field='name' header='Name' sortable></Column>
          <Column field='members' header='Members' sortable></Column>
        </DataTable>
      </div>
    )
  }
  const deleteButton = rowData => (
    <Button
      icon='pi pi-trash'
      disabled={!categories.length}
      className='p-button-rounded p-button-danger'
      onClick={() => dispatch(categoryDeleted(rowData))}
    />
  )
  const handleCheck = rowData => {
    const selectedGroupsIds = rowData.groupsIds
    console.log(rowData)
    console.log(selectedGroupsIds)
    dispatch(
      !rowData.selected
        ? categorySelected(selectedGroupsIds)
        : categoryUnselected(selectedGroupsIds)
    )
    dispatch(categoryCheckboxChecked(rowData))
  }
  return (
    <div className='categories-table'>
      <div className='groups-categories-text-title'>
        <h2>Groups categories</h2>
      </div>
      <DataTable
        scrollHeight='350px'
        scrollable
        value={categories}
        onRowToggle={e => setExpandedRows(e.data)}
        expandedRows={expandedRows}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey='id'
      >
        <Column expander field='name' style={{ width: '10px' }} />
        <Column field='name' />
        <Column
          field='selected'
          body={rowData => {
            console.log(rowData)
            return (
              <Checkbox
                checked={rowData.selected}
                onChange={() => handleCheck(rowData)}
              />
            )
          }}
        />
        <Column field='selected' body={deleteButton} />
      </DataTable>
    </div>
  )
}

export default CategoriesTable
