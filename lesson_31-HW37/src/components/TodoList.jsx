

function TodoList({todo}) {

   return todo.map((el) => {
      return <li className="list" key={el}>
         <input className="inputCheck" type="checkbox" />
         <label className='labelCheck' htmlFor="">{el}</label>
         </li>
   })
}

export default TodoList