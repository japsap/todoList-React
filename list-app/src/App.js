import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);

    function addTodo(todo){
        setTodos({ todo, ...todos});
    }

    return (
        <div>
             <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )
}

export default App
