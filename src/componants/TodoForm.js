import React,{useState} from 'react'

function TodoForm() {
    const[input,setInput]=useState('');
    const handleSubmut=e=>{
        e.preventDefault();
        props.onsubmit
    }
  return (
    <form className="todo-form">
    <input type="text" placeholder="Add a todo" value={input} name="text" className="todo-input"/>
    <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
