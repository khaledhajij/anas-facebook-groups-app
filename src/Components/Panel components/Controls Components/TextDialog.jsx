import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputTextarea } from 'primereact/inputtextarea'

const TextDialog = (props) => {
  const [visible, setVisible] = useState(false)
  console.log(props)
  const showDialog = () => {
    setVisible(true)
  }

  const hideDialog = () => {
    setVisible(false)
  }

  const handleAccept = () => {
    // Do something with the text
    // Hide the dialog
    hideDialog()
  }

  const handleDecline = () => {
    // Hide the dialog
    hideDialog()
  }

  return (
    <div>
      <Button label='Text' className='p-button-rounded' onClick={showDialog} />
      <Dialog
        header='Enter Text'
        visible={visible}
        onHide={hideDialog}
        modal
        style={{ width: '50vw' }}
        footer={
          <div>
            <Button
              label='Decline'
              icon='pi pi-times'
              onClick={handleDecline}
            />
            <Button label='Accept' icon='pi pi-check' onClick={handleAccept} />
          </div>
        }
      >
        <InputTextarea
          rows={5}
          value={props.text}
          onChange={e => props.setText(e.target.value)}
          autoResize
          style={{ width: '100%' }}
        />
      </Dialog>
    </div>
  )
}

export default TextDialog
