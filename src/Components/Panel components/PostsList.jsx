import React from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'

const PostsList = props => {
  const handleDelete = () => {
    props.setText('')
  }
  return (
    <div style={{ width: '25vw' }}>
      <div className='post-list-text-title'>
        <h2>Post text</h2>
        <Button
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger'
          onClick={handleDelete}
        />
      </div>
      <InputTextarea
        disabled
        rows={5}
        value={props.text}
        onChange={e => props.setText(e.target.value)}
        autoResize
        style={{ width: '100%' }}
      />
      <h2>Post images</h2>
      {props?.photos?.map(photo => (
        <img
          key={photo.name}
          src={URL.createObjectURL(photo)}
          alt={photo.name}
        />
      ))}
    </div>
  )
}

export default PostsList
