import React from 'react';
import './Form.css';

export const Form = ({task, settask, tasks, settasks, setStatus,selected, setSelected}) => {
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        settasks([...tasks, {text:task, completed: false, id:Math.random()*1000}]);
        settask("");
    }
    const setFilteredTodos = (e) =>{
        setStatus(e.target.value);
    }
    return (
        <>
          <div className='form'>
        <form>
                <input  type="text" value={task} name="task" placeholder='Type Here...' onChange = {e => settask(e.target.value)}  />
                <button className="todo-button" type="submit" onClick={handleSubmit}>
                <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                <select onChange = {setFilteredTodos} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
                </div>
                
                
                <div className="select">
      </div>
        </form>
        
        </div>
        </>
    )
}
