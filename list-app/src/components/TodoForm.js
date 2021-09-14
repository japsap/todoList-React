import React, { useState } from 'react';
import uuid from 'uuid';

const TodoForm = () => {
    const [todo, setTodos] = useState({
        id: "",
        task: "",
        complete : false
    });

    function handleTaskChange(e){
        setTodos({ ...todo, task: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id: uuid.v4() });
            //reset todo
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskChange}
            />
            <button type="submit"/>
        </form>
    )
}

export default TodoForm
