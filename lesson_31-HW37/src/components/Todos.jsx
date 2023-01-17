import React, {useState} from "react"


function Todos({fff}) {

// const [value, setValue] = useState(fff)

// setValue(fff)
// console.log(value);

// console.log(value);

return fff.map((el) => {
   return <li>{el}</li>
})
}

export default Todos