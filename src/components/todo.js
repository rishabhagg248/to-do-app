import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className='Todo'>
            <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className='icons' />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className='icons' />
            </div>
        </div>
    )
}

export default Todo