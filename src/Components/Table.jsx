import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import groupsData from '../data'
import { Tag } from 'primereact/tag'
import { Button } from 'primereact/button'
import CheckboxInput from './CheckboxInput'
const Table = () => {
  const [groups, setGroups] = React.useState(groupsData)
  const [selectedRows, setSelectedRows] = useState([])
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
        <Button disabled={!selectedRows.length}>Save selected groups as a category</Button>
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
        filterDisplay='row'
        className='groups-table'
        resizableColumns
      >
        <Column
          body={rowData => (
            <CheckboxInput
              groups={groups}
              setSelectedRows={setSelectedRows}
              rowData={rowData}
              id={rowData.id}
            />
          )}
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder='Search by name'
          sortable
          field='name'
          header='Name'
          style={{width: "33%"}}
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder='Search by id'
          field='id'
          header='Id'
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder='Filter by members count'
          dataType='numeric'
          sortable
          field='members'
          header='Members'
          body={statusBodyTemplate}
        ></Column>
      </DataTable>
    </div>
  )
}

export default Table
