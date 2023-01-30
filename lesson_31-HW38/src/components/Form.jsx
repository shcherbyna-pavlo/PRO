import { useState } from 'react'
import Table from './Table'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Form() {
const [getName, setgetName] = useState("");
const [getUsername, setgetUsername] = useState("");
const [getPhone, setgetPhone] = useState("");
const [getContact, setgetContact] = useState([]);


  const submit = (ev) => {
    ev.preventDefault();
    setgetContact([
      {
        id: Date.now(),
        name: getName,
        username: getUsername,
        phone: getPhone,
      },
    ]);
  };

   return (<>
      <Table contactForm={getContact}/>

      <Popup trigger={<button className='open'>Add contact</button>} position="top center">
         {close => (
            <div>
               <form onSubmit={submit}>
                  <input required type="text" name='name' onChange={(ev) => setgetName(ev.target.value)} placeholder="name" />
                  <input required type="text" name='username' onChange={(ev) => setgetUsername(ev.target.value)} placeholder="username" />
                  <input required type="text" name='phone' onChange={(ev) => setgetPhone(ev.target.value)} placeholder="phone" />
                  <button className='save' type="submit">Save</button>
                  <button className="close" onClick={close}>Close</button>
               </form>
            </div>
         )}
      </Popup>
   </>
   );
}

export default Form