import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { FileUpload } from 'primereact/fileupload'

const PhotosDialog = (props) => {
  const [visible, setVisible] = useState(false)

  const handlePhotoUpload = event => {
    props.setPhotos(event.files)
  }

  const photoDialogFooter = (
    <>
      <Button
        label='Save'
        icon='pi pi-check'
        onClick={() => setVisible(false)}
      />
      <Button
        label='Cancel'
        icon='pi pi-times'
        onClick={() => setVisible(false)}
        className='p-button-secondary'
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
          maxFileSize={1000000}
          onUpload={handlePhotoUpload}
          multiple
        />
        {props?.photos?.map(photo => (
          <img
            key={photo.name}
            src={URL.createObjectURL(photo)}
            alt={photo.name}
          />
        ))}
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
