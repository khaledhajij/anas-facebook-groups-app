import React, { useState } from 'react'
import Controls from './Controls Components/Controls'
import PostsList from './PostsList'
import CategoriesTable from '../Tables/CategoriesTable'
import ResultsTable from '../Tables/ResultsTable'

const Panel = () => {
  const [text, setText] = useState('')
  const [photos, setPhotos] = useState([])
  const [shownText, setShownText] = useState(text)
  const [results, setResults] = useState([])

  return (
    <div className='panel'>
      <Controls
        shownText={shownText}
        setShownText={setShownText}
        text={text}
        setText={setText}
        photos={photos}
        setPhotos={setPhotos}
        setResults={setResults}
      />
      <PostsList
        shownText={shownText}
        setShownText={setShownText}
        text={text}
        setText={setText}
        photos={photos}
        setPhotos={setPhotos}
        results={results}
        setResults={setResults}
      />
      <CategoriesTable />
      <hr />
      <ResultsTable results={results} />
    </div>
  )
}

export default Panel
