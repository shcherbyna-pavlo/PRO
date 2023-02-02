import React from 'react'
import {useDispatch} from 'react-redux';
import {toggleCompleted, removeTodo} from '../store/todoSlice'

function TodoItem({id, text, completed}) {

  const dispatch = useDispatch();
  console.log(text,id);
  return (
    <li>
        <input type="checkbox" checked={completed} onChange={()=>dispatch(toggleCompleted({id}))}/>
        <span>{text}</span>
        <span className='delete' onClick={()=>dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem