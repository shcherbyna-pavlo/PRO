import React, {useState} from "react"


function TodoList({fff}) {

// const [value, setValue] = useState(fff)

// setValue(fff)
// console.log(value);

// console.log(value);

return fff.map((el) => {
   return <li className="list" key={el}>
      <label htmlFor="">
      <input className="inputLeft" type="checkbox" />
      {el}
         </label></li>
})
}

export default TodoList