import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [value, setValue] = useState([])


  const push = () => {
    setValue(value => {
      value.push('fdfdg')
      return value})
  }
  
  
  console.log(value);

  return (
    <div className="App">
      <ul>
      <Todos fff={value}/>
      </ul>
      <input type="text" />
      <button onClick={push}>push</button>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
