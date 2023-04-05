import React, { useState } from 'react'
import TextDialog from './TextDialog'
import PhotosDialog from './PhotosDialog'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'

const Controls = ({
  text,
  setText,
  shownText,
  setShownText,
  photos,
  setPhotos
}) => {
  const canPost = shownText || photos.length
  const options = [
    { value: 'random', label: 'Random' },
    { value: 'order', label: 'Order' }
  ]
  const [value, setValue] = useState(null)

  return (
    <div className='controls'>
      <div className='controls-buttons'>
        <TextDialog setShownText={setShownText} text={text} setText={setText} />
        <PhotosDialog photos={photos} setPhotos={setPhotos} />
        <Button
          disabled={!canPost}
          className='p-button-rounded p-button-secondary start-post-button'
        >
          Start Post
        </Button>
      </div>
      <div className='controls-options'>
        <Dropdown placeholder='Post by' options={options} />
        <div className='random-text'>
          <div className='checkbox-with-label'>
            <Checkbox
              id='myCheckbox'
              checked={value}
              onChange={() => setValue(preValue => !preValue)}
            />
            <label htmlFor='myCheckbox'>Random text</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Controls
