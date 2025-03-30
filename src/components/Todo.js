import React, { useState } from 'react'

const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([])
    
    

    function handleSubmit(e) {
        e.preventDefault();
        setTodo(prevTodo => [...prevTodo, inputValue]);
        setInputValue("");
        
    }
    function handleDelete(index) {
        setTodo(prevItem => prevItem.filter((_, i)=>{
            return i !== index
        }))
    }
    
  return (
    <div>
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}  type="text" placeholder="your task..."></input>

        <button onClick={handleSubmit}>Add Todo</button>
        <ul>
            {
                todo.map((item, index)=>{
                    return(
                        
                            <li key={index}>
                                
                                {item} 
                                <button onClick={()=>handleDelete(index)}>Delete</button>

                            </li>
                        
                    )
                })
            }
        </ul>
      
    </div>
  )
}

export default Todo