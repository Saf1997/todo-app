import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import AddItem from './AddItem';

const TodoListFunctions = () => {

    //create an array object of a list of todo items 
    const listOfTodos = [
        {
            id: 1,
            job: 'Clean house',
        },
        {
            id: 2,
            job: 'Wash car',
        },
    ];

    // set the state of the list above 
    const [list, setList] = React.useState(listOfTodos);
    // this is for changing the state of the list (AddItem)
    const [job, setJob] = React.useState('');

    function handleChange(event) {
        setJob(event.target.value); 
        // used in order to implement event delegation 
        // this retrieves the value of that element (list of jobs)  
    }

    //handles the modification of the list and puts it into a variable "newList"
    function handleAdd() {
        const newList = list.concat({ job: job, id: uuidv4() });

        setList(newList); //current list
        setJob(''); //new list (takes empty string because it's for the user to fill out)
    }

    // using child component in the return AddItem which takes a job and 2 events 
    return (
        <div>
            <AddItem>
                job={job}
                onChange={handleChange}
                onAdd={handleAdd}
            </AddItem>

            <List list={list}/>
        </div>
    )
}

    // returned above as the 
    const List = ({ list }) => (
        <div>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.job}</li>
                ))}
            </ul>
        </div>
    )
    
export default TodoListFunctions;