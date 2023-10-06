import { useState } from 'react'

import './App.css'
import ESignature from './project/singnature_app/ESignature'
import RandomizedColor from './project/randomColor/RandomizedColor'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <ESignature />

        <div>
          <RandomizedColor />
        </div>
      </div>
        
    </>
  )
}

export default App
