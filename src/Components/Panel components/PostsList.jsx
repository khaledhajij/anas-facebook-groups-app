import React, { useState } from 'react'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button'
import { Paginator } from 'primereact/paginator'
import { Column } from 'primereact/column'
import { InputTextarea } from 'primereact/inputtextarea'

const PostsList = props => {
  const handleDelete = index => {
    const newPhotos = [...props.photos]
    newPhotos.splice(index, 1)
    props.setPhotos(newPhotos)
  }

  const photosWithButtons = props.photos.map((photo, index) => ({
    image: <img src={photo.objectURL} alt='' height='100' />,
    button: (
      <Button
        icon='pi pi-trash'
        className='p-button-rounded p-button-danger'
        onClick={() => handleDelete(index)}
      />
    )
  }))

  const columns = [
    { field: 'image', header: 'Image' },
    { field: 'button', header: '' }
  ]

  return (
    <div className='posts-list'>
      <div className='post-list-text-title'>
        <h2>Post text</h2>
        <Button
          disabled={!props.shownText}
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger'
          onClick={() => {
            props.setText('')
            props.setShownText('')
          }}
        />
      </div>
      <InputTextarea
        disabled
        rows={5}
        value={props.shownText}
        onChange={e => props.setText(e.target.value)}
        autoResize
        style={{ width: '100%' }}
      />
      <hr />
      <div className='post-list-images-title'>
        <h2>Post images</h2>
        <Button
          disabled={!props.photos.length}
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger'
          onClick={() => props.setPhotos([])}
        />
      </div>
      <div className='card'>
        <DataTable value={photosWithButtons} className='p-datatable-sm images-table'>
          {columns.map(col => (
            <Column key={col.field} field={col.field} header={col.header} />
          ))}
        </DataTable>
        <hr />
      </div>
    </div>
  )
}

export default PostsList
