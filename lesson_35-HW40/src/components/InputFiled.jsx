import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../store/todoSlice'

function InputFiled() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const setTask = (() => {
        dispatch(addTodo({ text }))
        setText('');
    });

    return (
        <label>
            <input type="text" value={text} onChange={((e) => setText(e.target.value))} />
            <button disabled={!text.trim()} onClick={setTask}>Add todo</button>
        </label>
    );
}

export default InputFiled;