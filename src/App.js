import React, {useState, useEffect} from 'react';
import './App.css';
import Completed from './Components/Completed';
import { Form } from './Components/Form';
import Selected from './Components/Selected';
import { TodoList } from './Components/TodoList';



function App() {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  const[status, setStatus] = useState("");
  const[filteredList, setFilteredList] = useState([]);
  const [selected, setSelected] = useState("");
  const[completed, setcompleted] = useState([]);

  useEffect(() => {
    renderFilteredList();
  }, [tasks, status]);
  
   const renderFilteredList = (e) =>{
    switch(status){
      case 'completed':
      setFilteredList(tasks.filter(task => task.completed === true));
      break;
      case 'uncompleted':
      setFilteredList(tasks.filter(task => task.completed === false));
      break; 
      default:
      setFilteredList(tasks)
      break;
    }
   }

  return (
    <div className="App">
     <h1 className='heading'>DECIDER</h1>
     <div className="row">
       <div className="col-lg-4 input">
     <Form task = {task} settask = {settask} tasks = {tasks} settasks = {settasks} setStatus={setStatus} selected={selected} setSelected={setSelected} />
     <TodoList  tasks = {tasks} settasks = {settasks} filteredList={filteredList} selected={selected} setSelected={setSelected} completed={completed} setcompleted={setcompleted}/>
     
     </div>
     <div className="col-lg-4">
     <Selected selected={selected} completed = {completed} setcompleted={setcompleted} setSelected={setSelected}/>
     </div>
     <div className="col-lg-4">
     <Completed completed={completed} setcompleted={setcompleted}/>
     </div>
     </div>
    </div>
  );
}

export default App;
