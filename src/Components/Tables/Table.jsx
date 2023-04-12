import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import CheckboxInput from '../CheckboxInput'
import SelectedGroupsTable from './SelectedGroupsTable'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from 'primereact/checkbox'

import {
  groupSelected,
  groupsSelector,
  selectedGroupsSelector
} from '../../groupsSlice'
const Table = () => {
  const groups = useSelector(groupsSelector)
  const selectedGroups = useSelector(selectedGroupsSelector)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  const statusBodyTemplate = product => {
    return (
      <Tag value={product.inventoryStatus} severity='success'>
        {product.members}
      </Tag>
    )
  }
  const DataTableHeader = () => {
    return (
      <div className='table-header'>
        <p>Groups</p>
        <Button
          disabled={!selectedGroups.length}
          onClick={() => setVisible(true)}
        >
          Save selected groups as a category
        </Button>
      </div>
    )
  }
  const nameColumnTemplate = rowData => {
    return (
      <div className='name-column'>
        {rowData.img ? <img src='' alt='' /> : <i className='pi pi-users'></i>}
        <div className='name-id'>
          <p className='group-name'>{rowData.name}</p>
          <p className='group-id'>{rowData.id}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='table'>
      <DataTable
        header={<DataTableHeader />}
        value={groups}
        size='normal'
        showGridlines
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        removableSort
        className='groups-table'
        resizableColumns
      >
        <Column
          header={rowData => (
            <Checkbox
              onChange={() => dispatch(groupSelected({ id: 'all' }))}
              checked={groups.every(group => group.selected)}
            ></Checkbox>
          )}
          body={rowData => (
            <CheckboxInput
              groups={groups}
              selectedGroups={selectedGroups}
              rowData={rowData}
              id={rowData.id}
            />
          )}
          style={{ width: '5px', textAlign: 'center' }}
          headerStyle={{
            width: '5px',
            textAlign: 'center',
            display: 'flex',
            width: '100%',
            height: '65px',
            justifyContent: 'center'
          }}
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder='Search by name'
          sortable
          body={nameColumnTemplate}
          header='Name'
          style={{ width: '33%' }}
        ></Column>
        <Column
          filter
          style={{ width: '100px' }}
          resizeable
          filterPlaceholder='Filter by members count'
          dataType='numeric'
          sortable
          field='members'
          header='Members'
          body={statusBodyTemplate}
          bodyClassName='text-center'
        ></Column>
      </DataTable>
      <SelectedGroupsTable visible={visible} setVisible={setVisible} />
    </div>
  )
}

export default Table
