import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { selectedGroupsSelector } from '../../groupsSlice'
import { addCategory } from '../../CategoriesSlice'

const SelectedGroupsTable = ({
  visible,
  setVisible
  // selectedGroups,
  // setCategories,
  // setSelectedGroups,
  // setGroups
}) => {
  const dispatch = useDispatch()
  const selectedGroups = useSelector(selectedGroupsSelector)
  const [text, setText] = useState('')
  const handleAccept = () => {
    const category = {
      name: text,
      categoryGroups: selectedGroups,
      selected: false,
      id: nanoid()
    }
    dispatch(addCategory({ category }))
  }
  return (
    <div className='selected-groups-table'>
      <Dialog
        header='Save selected groups as a category'
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        style={{ width: '50vw' }}
        footer={
          <div>
            <Button
              label='Decline'
              icon='pi pi-times'
              onClick={() => setVisible(false)}
              className='p-button-danger'
            />
            <Button
              disabled={!text}
              className='p-button-success'
              label='Accept'
              icon='pi pi-check'
              onClick={() => handleAccept()}
            />
          </div>
        }
      >
        <div className='category-name'>
          <span className='p-float-label'>
            <InputText
              id='in'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <label htmlFor='in'>Category name</label>
          </span>
        </div>
        <DataTable value={selectedGroups}>
          <Column field='name' header='Group name' />
          <Column field='members' header='Group members' />
        </DataTable>
      </Dialog>
    </div>
  )
}

export default SelectedGroupsTable
