import React from 'react'
import Counter from './hooks/useState-basic'
import DataFetch from './hooks/useEffect-basic'
import ControlledInput from './patterns/controlledInput'
import DebouncedInput from './patterns/DebounceInput'
import FormHandling from './patterns/FormHandling'

const App = () => {
  return (
    <div>
      <Counter />
      <DataFetch/>
      <ControlledInput/>
      <DebouncedInput/>
      <FormHandling/>
    </div>
  )
}

export default App