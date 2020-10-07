import React, {useState, useEffect, useRef} from 'react'

export default function TodoForm(props) {
    const[input, setInput]=useState(props.edit ? props.edit.value 
        : '');

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    };
    const todoSubmit=e=>{
        e.preventDefault();
        props.onSubmit({
             id:Math.floor(Math.random()*10000), //generating random ids for each todo item
             text:input
            });
        setInput('');
    }
    return (
        
        <div className="todo-div">
            <form className="todo-form" onSubmit={todoSubmit}>
               {props.edit ? (
               <>
               <input
                 type="text"
                 placeholder="Update your todo"
                value={input}
                 name='text'
                 className="todo-input edit"
                 onChange={handleChange}
                 ref={inputRef}
                 />
                 <button className="todo-button edit">Update</button>
                 </>
                 ) :
                 (
                    <>
                    <input
                    type="text"
                    placeholder="Add your todo"
                   value={input}
                    name='text'
                    className="todo-input"
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                    </>
                    )}
                
            </form>
        </div>
    
    )
}
