import React from 'react';


//this function is just rendering our todo tasks onto the dom
//the className part is giving us the option to toggle on and off whether the task is completed or not

const toDo = props => {
    console.log(props);
    return (
        <div
            className = {`item ${props.item.completed ? 'completed' : ''}`}
            onClick = {() => props.toggleItem(props.item.id)}
        >
            <p>{props.item.task}</p>

        </div>
    )
}

export default toDo;