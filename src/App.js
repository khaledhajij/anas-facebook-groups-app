import React, { useState } from 'react'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Table from './Components/Tables/Table'
import './Styling/index.css'
import Panel from './Components/Panel components/Panel'
import { useSelector } from 'react-redux'
import { groupsSelector } from './groupsSlice'
import { categoriesSelector } from './CategoriesSlice'
function App () {
  const groups = useSelector(groupsSelector)
  const categories = useSelector(categoriesSelector)
  return (
    <div className='App'>
      <Table
        groups={groups}
        // setGroups={setGroups}
        categories={categories}
        // setCategories={setCategories}
      />
      <Panel
        groups={groups}
        categories={categories}
        // setCategories={setCategories}
        // setGroups={setGroups}
      />
    </div>
  )
}

export default App
