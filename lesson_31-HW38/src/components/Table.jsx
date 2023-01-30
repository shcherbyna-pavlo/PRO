import { useState, useEffect} from 'react'

function Table({dataForm}) {
   const [data, setData] = useState([])
 
   useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json()).then(json => setData(json))
   }, [])

   useEffect(()=>{
      setData([...data,...dataForm])
     },[dataForm])

   const del=((id)=>{
      setData((()=>{
         return data.filter(item => id!==item.id)
      }))
   })

   return data.map((el)=>{
      return (
       <tr className='ffff' key={el.id}>
         <td>{el.name}</td>
         <td>{el.username}</td>
         <td>{el.phone}</td>
         <td><button onClick={()=>del(el.id)}>Delete</button></td>
       </tr>
      )
   })
}

export default Table