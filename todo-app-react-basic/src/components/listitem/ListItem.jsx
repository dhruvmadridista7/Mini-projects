import { useEffect, useState } from "react";

const ListItem = (props) => {
    const { tasks, removeTask } = props;


    return (
        <ul>
            {
                tasks.map((task) => {
                    return (
                        <li 
                            key={task.id} 
                            id={task.id}
                            onClick={removeTask}
                        >
                            {task.taskName}
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default ListItem;