
import { useState } from 'react'
import './App.css'

function App() {
const [state, setState] = useState(false);
  return (
    <>
      <button className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-250 hover:scale-500 transition  duration-500 cursor-pointer' onClick={()=>setState(!state)}>
        {(state)?'❤️':'🤍'}
      </button>
      <a href=""></a>
    </>
  )
}

export default App
