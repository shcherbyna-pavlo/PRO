import { useState, useEffect, useCallback} from 'react'

function Table({datas}) {
   const [data, setData] = useState([])
   const [dataForm, setdataForm] = useState([])
 
   useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json()).then(json => setData(json))
   //   setdataForm([...datas,...data])
   }, [])


   // setdataForm([...data,...datas])

   // useCallback(()=>{
   //  setdataForm([...data,...datas])
   // },[datas.length])

   useEffect(()=>{
      setData([...data,...datas])
     },[])

// console.log(dataForm);
// console.log(datas.length);
// console.log([...data,...datas]);

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