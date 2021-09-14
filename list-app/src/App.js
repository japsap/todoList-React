import React, { useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([]);

    function addTodo(todo){
        setTodos({ todo, ...todos});
    }

    return (
        <div>
            <TodoForm
                addTodo={addTodo}
            />
        </div>
    )
}

export default App
