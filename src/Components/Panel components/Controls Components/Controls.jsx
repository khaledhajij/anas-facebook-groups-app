import React, { useState } from 'react'
import TextDialog from './TextDialog'
import PhotosDialog from './PhotosDialog'
import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'
import { Checkbox } from 'primereact/checkbox'
import { useSelector } from 'react-redux'
import { selectedGroupsSelector } from '../../../groupsSlice'
import { useToast } from '@chakra-ui/react'
import { InputNumber } from 'primereact/inputnumber'

const Controls = ({
  text,
  setText,
  shownText,
  setShownText,
  photos,
  setPhotos,
  setResults
}) => {
  const selectedGroups = useSelector(selectedGroupsSelector)
  const canPost = (shownText || photos.length) && selectedGroups.length
  const [timer, setTimer] = React.useState(5)
  const [groups, setGroups] = React.useState(selectedGroups.length)
  const [postMode, setPostMode] = React.useState('order')
  const [timeoutIds, setTimeoutIds] = useState([])
  const [showPostButton, setShowPostButton] = useState(true)
  const options = [
    { value: 'random', label: 'Random' },
    { value: 'order', label: 'Order' }
  ]
  const [value, setValue] = useState(null)
  React.useEffect(() => {
    setGroups(selectedGroups.length)
  }, [selectedGroups.length])
  const toast = useToast()
  const groupsPostedTo =
    postMode === 'order'
      ? selectedGroups
      : selectedGroups.slice().sort(() => Math.random() - 0.5)
  const handlePost = () => {
    setShowPostButton(false)
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
    setTimeoutIds([])
    groupsPostedTo.slice(0, groups).forEach((group, index) => {
      const timeoutTimer = setTimeout(() => {
        console.log({
          text,
          photos,
          groupId: group.id
        })
        setResults(preRes => [
          ...preRes,
          {
            text,
            photos,
            groupId: group.id
          }
        ])
        toast({
          title: 'Starting post',
          description: `Posting to the group with id ${group.id}`,
          status: 'success',
          duration: 2000,
          isClosable: true
        })
      }, (index + 1) * 1 * 1000)

      // Store the timeout ID in state so it can be cleared later
      setTimeoutIds(timeoutIds => [...timeoutIds, timeoutTimer])
    })
  }
  const handleStopPost = () => {
    setShowPostButton(true)
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId))
    setTimeoutIds([])
  }

  return (
    <div className='controls'>
      <div className='controls-buttons'>
        <TextDialog setShownText={setShownText} text={text} setText={setText} />
        <PhotosDialog photos={photos} setPhotos={setPhotos} />
      </div>
      <div className='show-hide-buttons'>
        {showPostButton ? (
          <Button
            disabled={!canPost}
            className='p-button-rounded p-button-secondary start-post-button'
            onClick={handlePost}
          >
            Start Post
          </Button>
        ) : (
          <Button
            disabled={!canPost}
            onClick={handleStopPost}
            className='p-button-rounded p-button-secondary start-post-button'
          >
            Stop Post
          </Button>
        )}
      </div>
      <div className='controls-options'>
        <div className='post-options'>
          <label className='options' htmlFor='options'>
            Post by
          </label>
          <Dropdown
            placeholder='Post by'
            id='options'
            options={options}
            value={postMode}
            onChange={e => setPostMode(e.value)}
          />
        </div>
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
        <div className='flex'>
          <label htmlFor='Seconds per process'>Seconds</label>
          <InputNumber
            id='Seconds per process'
            value={timer}
            onChange={e => setTimer(e.value)}
            showButtons
            min={1}
          />
        </div>
        <div className='flex'>
          <label htmlFor='Number of groups'>Groups</label>
          <InputNumber
            id='Number of groups'
            value={groups}
            onChange={e => setGroups(e.value)}
            showButtons
            min={0}
            max={selectedGroups.length}
          />
        </div>
      </div>
    </div>
  )
}

export default Controls
