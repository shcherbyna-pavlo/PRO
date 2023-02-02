import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            console.log(action.payload.id);
        },
        toggleCompleted(state, action) {
            const toggle = state.todos.find(todo => todo.id === action.payload.id);
            console.log(action.payload.id);
            toggle.completed = !toggle.completed;
        }
    },
});

export const {addTodo, removeTodo, toggleCompleted} = todoSlice.actions;

export default todoSlice.reducer;