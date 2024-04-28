import React from 'react'

function Input({inputVal,writeTodo,addTask}) {
  return (
    <div className="input">
    <input type="text" value={inputVal} placeholder='Enter your task ' onChange={writeTodo} />
    <button onClick={addTask}>+</button>
    
  </div>
  )
}

export default Input