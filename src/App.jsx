import { useEffect,useState } from 'react'
import Input from './Components/Input';
import Todo from './Components/Todo';

import './App.css'

function App() {
  
  const [inputVal, setInputVal]=useState('');
  const[todo,setTodo]=useState([]);

  function writeTodo(e){
    setInputVal(e.target.value)
  }
   
  
  useEffect(() => {
    const storedTodo = localStorage.getItem('TodoApp'); // Load todo list initially 
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('TodoApp', JSON.stringify(todo));// Update todo list
  }, [todo]);
  
  
  function addTask(){

    if(inputVal!=''){
      setTodo((prevTask)=>[...prevTask,inputVal])
      setInputVal("") 
    }
  }

 function deleteTodo(index){ //required index to be deleted
  setTodo((prevTodo)=>
    prevTodo.filter((prevTodo,prevTodoindex)=>{//prevTodoindex is index of each item 
      return  index!=prevTodoindex
    })
  )
 } 

  console.log(todo);
  return (
    <>
    <h1>To do list</h1>
     <Input inputVal={inputVal} writeTodo={writeTodo} addTask={addTask} todo={todo}/>
     <Todo todo={todo} deleteTodo={deleteTodo} />
     
    </>
  )
}

export default App
