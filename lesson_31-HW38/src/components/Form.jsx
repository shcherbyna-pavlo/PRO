import { useState } from 'react'
import Table from './Table'


function Form() {
const [getName, usegetName] = useState('')
const [getUsername, usegetUsername] = useState('')
const [getPhone, usegetPhone] = useState('')
const [getData, usegetData] = useState([])
const [getDatas, usegetDatas] = useState([])


  const sub = (ev)=>{
     ev.preventDefault()
   usegetData([...getData,
      {
      id: Date.now(),
      name:getName,
      username:getUsername,
      phone:getPhone
   }
   
])
   
   }
// function gggg (name)  {
//    usegetDatas(name)
// }

// console.log(getData);
   return (<>
      <form  onSubmit={sub}>
         <input type="text" name='name' onChange={(ev)=>usegetName(ev.target.value)}  placeholder="name"/>
         <input type="text" name='username' onChange={(ev)=>usegetUsername(ev.target.value)}  placeholder="username"/>
         <input type="text" name='phone' onChange={(ev)=>usegetPhone(ev.target.value)}  placeholder="phone"/>
         <button type="submit">Зберегти</button>
      </form>

      <Table datas={getData}/>
   </>
   )
}

export default Form