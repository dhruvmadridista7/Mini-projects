import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import ListItem from "../listitem/ListItem";

const Todo = () => {
    const [tasks, setTasks] = useState([]);

    const getTask = (currentTask) => {
        // console.log(currentTask);
        const newTasks = [...tasks];
        newTasks.push({
            id : Date.now(),
            taskName : currentTask
        })
        // console.log(tasks);
        setTasks(newTasks);
    }
    
    const removeTask = (event) => {
        // console.log(event.target.id);
        const filteredTask = tasks.filter((task) => {
            return task.id !== parseInt(event.target.id);
        })

        setTasks(filteredTask);
    }
    

    return (
        <>
            TODO APP
            <InputBox parentGetTask = { getTask }/>
            <ListItem tasks = { tasks } removeTask = { removeTask } />
        </>
    );
};


export default Todo;