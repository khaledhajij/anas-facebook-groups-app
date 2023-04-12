import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'

const ResultsTable = ({ results }) => {
  return (
    <div className='results-table'>
      <div className='groups-results-text-title'>
        <h2>Results</h2>
      </div>
      <DataTable value={results} header='Results table'>
        <Column body={<Button>View</Button>} />
      </DataTable>
    </div>
  )
}

export default ResultsTable
