import React,{useState} from 'react'

const Task = ({task,tasks, settasks, completed, setcompleted}) => {
    
    const completeHandler = (e) =>{
        e.preventDefault();
        var compitem;
        settasks(tasks.map((item)=>{
            if(item.id === task.id){
                compitem = item;
                setcompleted([...completed, {selected:item,timer:0}]);
                console.log(completed);
            }
            return item;
        }))
        settasks(tasks.filter((el) => el.id !== compitem.id))
    }
    const deleteHandler = () =>{
        settasks(tasks.filter((el) => el.id !== task.id))
    }
    return (
        <div   className="todo">
            <li className={`todo-item ${task.completed?"completed":""}`}>{task.text}</li>
            <button onClick = {completeHandler} className="complete-btn"><i className = "fas fa-check"></i></button>
            <button onClick = {deleteHandler} className="trash-btn"><i className = "fas fa-trash"></i></button>
        </div>
    )
}
export default Task;
