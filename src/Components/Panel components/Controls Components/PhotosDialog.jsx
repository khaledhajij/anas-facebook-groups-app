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

  const template = {
    // Hide the upload and cancel buttons by setting their display to "none"
    uploadButton: null,
    cancelButton: null,
    // You can add additional elements to the template if needed
    // For example, you could add a custom button to trigger the file selection dialog
    chooseButton: (
      <button className="p-button p-fileupload-choose p-component" type="button">
        <span className="p-button-icon p-c pi pi-plus"></span>
        <span className="p-button-label p-c">Choose</span>
      </button>
    ),
    // You can also customize the progress bar and file name display
    progressBar: (
      <div className="p-progressbar p-component">
        <div className="p-progressbar-value p-progressbar-value-now" style={{ width: '0%' }}></div>
      </div>
    ),
    fileNameTemplate: (file) => {
      return (
        <div className="p-fileupload-filename">
          {file.name}
        </div>
      );
    },
  };

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
          itemTemplate={template}
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
