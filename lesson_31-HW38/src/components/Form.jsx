import { useState } from 'react'
import Table from './Table'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Form() {
const [getName, usegetName] = useState('')
const [getUsername, usegetUsername] = useState('')
const [getPhone, usegetPhone] = useState('')
const [getData, usegetData] = useState([])


  const submit = (ev)=>{
     ev.preventDefault()
   usegetData([
      {
      id: Date.now(),
      name:getName,
      username:getUsername,
      phone:getPhone
   }
])
   }

   return (<>
      <Table dataForm={getData}/>

   <Popup trigger={<button className='open'>Add contact</button>} position="top center">
   {close => (
      <div>
      <form onSubmit={submit}>
         <input required type="text" name='name' onChange={(ev)=>usegetName(ev.target.value)}  placeholder="name"/>
         <input required type="text" name='username' onChange={(ev)=>usegetUsername(ev.target.value)}  placeholder="username"/>
         <input required type="text" name='phone' onChange={(ev)=>usegetPhone(ev.target.value)}  placeholder="phone"/>
         <button className='save' type="submit">Save</button>
      <button  className="close" onClick={close}>Close</button>
      </form>
      </div>
    )}
   </Popup>

   </>
   )
}

export default Form