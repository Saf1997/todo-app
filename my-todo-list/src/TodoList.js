import './App.css';
import React, { useState } from 'react';


function TodoList() {

    // use useState to enable us to store user input todo list items and use for later
    // turning it into an array object with id and name allows us to keep a stateful list and we can modify it

    const listOfTodos = [
        {
            id: 1,
            name: "Clean house"

        },
        {
            id: 2,
            name: "Organise post"

        },
        {
            id: 3,
            name: "Wash car"

        }
    ];

    //setJobs is needed for updating the state (which we'll do below)
    const [jobs, setJobs] = useState(listOfTodos)

    //jobs is a var that holds our state   
    return (
        <div>
            <p id="list-title"> List of jobs </p>
            <ul>
                {jobs.map((job) => {
                    return <div className="listOfTodos" key={job.id}>{job.name}</div>
                })}
            </ul>

        </div>

    )

}

export default TodoList