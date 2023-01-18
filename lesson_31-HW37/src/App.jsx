import React, { useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [value, setValue] = useState('')
 const [val, setVal] = useState([])

 const push = () => {
    setVal((prev) => {
       return [...prev, value]
     })

     setValue('')
    //  setDisabled("disabled")
  }

//  useEffect(() => {
//   if(value) {
//     setDisabled("")
//   } else {setDisabled("disabled")}
//  },[value])



//  const dddd = (e) => {
//   setValue(e.target.value)
// }
  
  // if (e.target.value !== "") setDisabled("")
  // if (e.target.value === "") setDisabled("disabled")


return  (
  <>
    <div className="App">
        <ul>
        <TodoList fff={val}/>
        </ul>
        <input type="text" onChange={(e) => setValue(e.target.value)}/>
        <button disabled = {!value.trim()} onClick={push}>Add</button>
        </div>
    </>
         
        )
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
  
}

export default App
