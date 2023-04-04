import React, { useState } from 'react'
import TextDialog from './Controls Components/TextDialog'
import PhotosDialog from './Controls Components/PhotosDialog'

const Controls = ({text, setText, photos, setPhotos}) => {

  return (
    <div className='controls'>
      <TextDialog text={text} setText={setText} />
      <PhotosDialog photos={photos} setPhotos={setPhotos} />
    </div>
  )
}

export default Controls
