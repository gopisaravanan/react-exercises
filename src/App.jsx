import React from 'react'
import Counter from './hooks/useState-basic'
import DataFetch from './hooks/useEffect-basic'

const App = () => {
  return (
    <div>
      <Counter />
      <DataFetch/>
    </div>
  )
}

export default App