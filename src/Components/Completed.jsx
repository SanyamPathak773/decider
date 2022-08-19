import React from 'react';
import './Completed.css'

const Completed = ({completed}) => {
    return (
        <div>
            <h1 >Completed Tasks</h1>
        <table className='table'>
        <tr>
          <th>Task</th>
          <th>Completion Time</th>
        </tr>
        {completed.map((val, key) => {
            console.log(val);
          return (
            <tr key={key}>
              <td>{val.selected.text}</td>
                <td>{val.timer}</td>
              
            </tr>
          )
        })}
      </table>
            {/* <ul className='list'>
            {completed.map(data => (
                console.log("item "+JSON.stringify(data)),
                <li>{data.selected.text} {data.timer}</li>
            ))}
            </ul> */}
        </div>
    )
}

export default Completed
