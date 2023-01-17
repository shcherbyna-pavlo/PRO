import React from "react"
import './App.css'
import Smile from "./components/Smile"

const reactions = ["👍", "👎", "💚", "💩", "🤣", "🤔", "😍"];

class App extends React.Component {

render(){
  return <Smile 
  symbol = {reactions}
  count= {0}
  />
  }
}


export default App
