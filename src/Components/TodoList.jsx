import React  from 'react'
import Task from './Task';
import './TodoList.css';

export const TodoList = ({tasks, settasks, filteredList, setSelected, selected, completed, setcompleted}) => {
    const decideHandler = () =>{
        let l = tasks.length;
        if(l===0)return;
        let selectedIndex = Math.floor(Math.random()*l);
        setSelected(tasks[selectedIndex]);
        tasks.splice(selectedIndex, 1);
        settasks(tasks);
    }
    
    return (
        <>
        <div className='row '>
            <div className="col-lg-8 todo-container">
            <ul className='list todo-list'>
            {filteredList.map(task =>(
                 <Task task = {task} tasks = {tasks} settasks={settasks} completed={completed} setcompleted={setcompleted}/>
            ))}
            </ul>
            </div>
            <div className="col-lg-4">
            <button className='decide-btn' onClick = {decideHandler}>Decide</button>
            </div>
        </div>
        </>
    )
}
