import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../store/todoSlice' ;

function Todo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.task);

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="todo">
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Введите задачу"
                />
                <button onClick={handleAddTodo}>Добавить</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                        <button onClick={() => dispatch(toggleComplete(todo.id))}>
                            {todo.completed ? 'Отменить' : 'Выполнить'}
                        </button>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
