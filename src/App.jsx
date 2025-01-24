import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './work/first'
import Second from './work/second'
import Third from './work/third'
import Four from './work/four'
import Five from './work/five'
import Six from './work/Six'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <First />
      <Second />
      <Third />
      <Four />
      <Five />
      <Six />

    </>
  )
}

export default App
