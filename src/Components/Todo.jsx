import React, { useState } from "react";

function Todo({ todo, deleteTodo}) {

   const [search,Setsearch]=useState('');
   function se(e){
    Setsearch(e.target.value);
   }
   
  return (
    <>
    <div className="search">
      <input type="text" value={search} onChange={se} placeholder="Search your task "/>
    </div>
    <div className="todo">
    {todo.
    filter((val)=>{
      // eslint-disable-next-line react/prop-types
      return val.toLowerCase().includes(search.toLocaleLowerCase())
    }).map((val,index)=>{
         return (
          <p key={index}>
            {val}
            <div className="action">
              <input
                type="checkbox"
              />
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </p>
         )
    })
    }
     
    </div>

    
    </>
  );
}

export default Todo;
