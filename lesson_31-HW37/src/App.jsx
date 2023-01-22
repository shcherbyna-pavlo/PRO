import React, { useState} from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [value, setValue] = useState('')
 const [list, setList] = useState([])

 const push = () => {
  setList((prev) => {
       return [...prev, value]
     })

     setValue('')
  }

  return (
    <>
      <div className="App">
        <ul>
          <TodoList todo={list} />
        </ul>
        <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
        <button disabled={!value.trim()} onClick={push}>Add</button>
      </div>
    </>
  )
}

export default App
