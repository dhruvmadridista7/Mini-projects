import { useState } from "react";

const InputBox = (props) => {
    const [val, setVal] = useState('');

    const setInputData = (event) => {
        // console.log(event.target.value);
        setVal(event.target.value);
    }

    const addTask = () => {
        // console.log(val);
        console.log('task added');
        props.parentGetTask(val);
    }

        
    return (
        <>  
            <input 
                type="text" 
                placeholder="Enter your task here"
                onChange={setInputData}
                value={val}
            />
            <button onClick={addTask}>Add Task</button>
        </>
    );
}

export default InputBox;

