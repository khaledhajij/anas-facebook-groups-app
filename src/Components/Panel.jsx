import React, { useState } from 'react'
import Controls from './Panel components/Controls'
import PostsList from './Panel components/PostsList'
import GroupsCategory from './Panel components/GroupsCategory'

const Panel = () => {
  const [text, setText] = useState('')
  const [photos, setPhotos] = useState([])

  return (
    <div className='panel'>
      <Controls text={text} setText={setText} photos={photos} setPhotos={setPhotos} />
      <PostsList text={text} setText={setText} photos={photos} setPhotos={setPhotos} />
      <GroupsCategory />
    </div>
  )
}

export default Panel
