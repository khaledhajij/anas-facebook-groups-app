import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputTextarea } from 'primereact/inputtextarea'

const TextDialog = props => {
  const [visible, setVisible] = useState(false)

  const handleAccept = () => {
    setVisible(false)
    props.setShownText(props.text)
  }

  const handleDecline = () => {
    setVisible(false)
    props.setText('')
  }

  return (
    <div>
      <Button
        label='Text'
        className='p-button-rounded'
        onClick={() => setVisible(true)}
      />
      <Dialog
        header='Enter Text'
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        style={{ width: '50vw' }}
        footer={
          <div>
            <Button
              label='Decline'
              icon='pi pi-times'
              onClick={handleDecline}
              className='p-button-danger'
            />
            <Button
              disabled={!props.text}
              className='p-button-success'
              label='Accept'
              icon='pi pi-check'
              onClick={handleAccept}
            />
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
