import React, { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'
import { nanoid } from 'nanoid'
import { Checkbox } from 'primereact/checkbox'

const TextDialog = props => {
  const [visible, setVisible] = useState(false)
  const [randomText, setRandomText] = useState('')
  const [randomTextArray, setRandomTextArray] = useState([])
  const [addingRandomText, setAddingRandomText] = useState(false)

  const handleRandomTextDelete = props => {
    setRandomTextArray(preArr => preArr.filter(txt => txt.id !== props.id))
  }

  const randomTextList = randomTextArray.map(e => (
    <div className='random-text-list-item'>
      <p>{e.text}</p>
      <div className='check-delete'>
        <Button
          icon='pi pi-trash'
          className='p-button-danger'
          onClick={() => handleRandomTextDelete(e)}
        />
        <Checkbox />
      </div>
    </div>
  ))
  const handleAccept = () => {
    setVisible(false)
    props.setShownText(props.text)
  }

  const handleDecline = () => {
    setVisible(false)
    props.setText('')
  }

  const handleRandomTextAccept = e => {
    setAddingRandomText(false)
    setRandomTextArray(preArr => [
      ...preArr,
      { text: randomText, id: nanoid() }
    ])
    setRandomText('')
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
        <div className='add-new-text'>
          <Button icon='pi pi-plus' onClick={() => setAddingRandomText(true)} />
          {addingRandomText && (
            <>
              <InputText
                value={randomText}
                onChange={e => setRandomText(e.target.value)}
              />
              <Button
                icon='pi pi-check'
                className='p-button-success'
                onClick={handleRandomTextAccept}
              />
              <Button
                icon='pi pi-trash'
                className='p-button-danger'
                onClick={() => setAddingRandomText(false)}
              />
            </>
          )}
        </div>
        <ul>{randomTextList}</ul>
      </Dialog>
    </div>
  )
}

export default TextDialog
