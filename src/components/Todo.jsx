import React, {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'
import Todoform from './TodoForm'
import TodoList from './TodoList';

export default function Todo({todos, completeTodo, removeTodo, updateTodo}) {
     const [edit, setEdit] = useState({
         id:null,
         value:''
     })

const submitUpdate= value=>{
    updateTodo(edit.id, value)
    setEdit({
        id: null,
        value:''
    })
} 
if (edit.id){
    return <Todoform edit={edit} onSubmit={submitUpdate}/>
}


    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? 'todo-row complete' :'todo-row'} key={index}>
            <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
            <FaTrashAlt 
            onClick={()=>removeTodo(todo.id)} 
            className="delete-icon"
            />
            <TiEdit
            onClick={()=>setEdit({id:todo.id, value: todo.text})} 
            className="set-icon"
            />
            </div>
        </div>
    ))
}
