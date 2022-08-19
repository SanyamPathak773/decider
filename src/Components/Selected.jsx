import React, {useState, useEffect} from 'react'

const Selected = ({selected, completed, setcompleted, setSelected}) => {
    var [timer, setTimer] = useState(0);
    const [started, setstarted] = useState(false);
    const[intervalId, setIntervalId] = useState(0);
    const handleStart = () =>{
        console.log("started!!");
        setstarted(true);
        // document.getElementById("start").disabled = true;
        var time = setInterval(()=> setTimer(timer = timer+1) , 1000);
        setIntervalId(time);
        // document.getElementById("stop").disabled = false;
    }
    const handleStop = (e) =>{
        e.preventDefault();
        setstarted(false);
        clearInterval(intervalId);
        setSelected("");
        setcompleted([...completed, {selected,timer}]);
        setTimer(0);
        
        // document.getElementById("start").disabled = false;
        // document.getElementById("stop").disabled = true;
        document.getElementById("play").disabled = true;
        // setTimer(0);
    }
        useEffect(() => {
            if(!selected){
                document.getElementById('buttons').style.display="none";
            }
            else{
                document.getElementById('buttons').style.display="block";
            }
        }, [selected, completed])
    return (
        <div>
            <h1>Selected Task</h1>
            <div id = "buttons">
            <p className='task'>{selected.text}</p>
            <h3>{timer}</h3>
            <button id="play" className={started?'trash-btn':'complete-btn'} onClick={started?handleStop:handleStart}><i className={`${started?"fas fa-stop":"fas fa-play"}`}></i></button>
            {/* <button id = "stop" className='trash-btn' onClick = {handleStop} ><i class="fas fa-stop"></i></button> */}
            </div>
        </div>
    )
}

export default Selected; 