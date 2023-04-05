import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import { Paginator } from 'primereact/paginator'

const PostsList = props => {
  const [first, setFirst] = useState(0)
  const urls = props.photos.map(obj => obj.objectURL)
  const handleTextDelete = () => {
    props.setText('')
    props.setShownText('')
  }

  const handlePhotosDelete = () => {
    props.setPhotos([])
  }

  const onPageChange = event => {
    setFirst(event.first)
  }
  return (
    <div className='posts-list'>
      <div className='post-list-text-title'>
        <h2>Post text</h2>
        <Button
          disabled={!props.shownText}
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger'
          onClick={handleTextDelete}
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
      <hr/>
      <div className='post-list-images-title'>
        <h2>Post images</h2>
        <Button
          disabled={!props.photos.length}
          icon='pi pi-trash'
          className='p-button-rounded p-button-danger'
          onClick={handlePhotosDelete}
        />
      </div>
      <div className='card'>
        <Paginator
          first={first}
          rows={1}
          totalRecords={urls.length}
          onPageChange={onPageChange}
          template='FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
        />
        <div className='images-paginator'>
          {urls.length ? (
            <img
              alt={first}
              src={urls[first]}
              className='shadow-2 border-round max-w-full'
            />
          ) : (
            'No images yet'
          )}
        </div>
      <hr/>

      </div>
    </div>
  )
}

export default PostsList
