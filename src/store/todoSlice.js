import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task: [],
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.task.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleComplete: (state, action) => {
            const todo = state.task.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.task = state.task.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
