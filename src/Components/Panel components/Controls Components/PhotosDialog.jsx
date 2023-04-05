import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { FileUpload } from 'primereact/fileupload'

const PhotosDialog = (props) => {
  const [visible, setVisible] = useState(false)

  const handlePhotoUpload = event => {
    props.setPhotos(photos => [...photos, ...event.files])
  }

  const handleCancel = () => {
    props.setPhotos([])
    setVisible(false)
  }
  const photoDialogFooter = (
    <>
      <Button
        label='Save'
        icon='pi pi-check'
        onClick={() => setVisible(false)}
        className='p-button-success'
        disabled={!props.photos.length}
      />
      <Button
        label='Cancel'
        icon='pi pi-times'
        onClick={() => handleCancel()}
        className='p-button-danger'
      />
    </>
  )

  const renderPhotoDialog = () => {
    return (
      <Dialog
        header='Uploaded Photos'
        visible={visible}
        onHide={()=>setVisible(false)}
        modal
        footer={photoDialogFooter}
        style={{ width: '50vw' }}
      >
        <FileUpload
          name='photo'
          url='#'
          accept='image/*'
          maxFileSize={100000000}
          onSelect={handlePhotoUpload}
          multiple
          emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
        />
      </Dialog>
    )
  }

  return (
    <div>
      <Button
        label='Photo'
        icon='pi pi-image'
        className='p-button-rounded'
        onClick={() => setVisible(true)}
      />

      {renderPhotoDialog()}
    </div>
  )
}
export default PhotosDialog
