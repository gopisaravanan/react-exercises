import React from 'react'
import Counter from './hooks/useState-basic'
import DataFetch from './hooks/useEffect-basic'
import ControlledInput from './patterns/controlledInput'

const App = () => {
  return (
    <div>
      <Counter />
      <DataFetch/>
      <ControlledInput/>
    </div>
  )
}

export default App