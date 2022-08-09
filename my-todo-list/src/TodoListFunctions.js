import './App.css';
import TodoList from './TodoList';
import React, { useState } from 'react';

const TodoListFunctions = () => {

    const [jobs, setJobs] = useState(listOfTodos)

    function handleChange() {

    }

    function handleAdd() {

    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleChange}/>
                <button type= "button" onClick={handleAdd}>
                Add 
                </button> 
            </div>


        <ul>
            {list.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </div>
    );
};


export default TodoListFunctions