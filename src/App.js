import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/UI/AddTask";
import Button from "./Components/UI/Button";
import Model from "./Components/UI/Model";
import Seacrh from "./Components/UI/Seacrh";
import Sidebar from "./Components/UI/Sidebar";
import "./styles/style.css";

function App() {

  const [task, setTask] = useState([                    //posts
    {id: 1, title: 'Санек', body: 'Староста 61 комнаты СД№8'},
    {id: 2, title: 'Витек', body: 'Render'}
  ])

  const createTask = (newTask) => {
      setTask([...task, newTask])
  }
  const [modelActive, setModelActive] = useState(false)  //modal window
  const [navActive, setNavActive] = useState(false)  //modal navbar
 
  const removeTask = (tasks) => {
    setTask(task.filter(p => p.id !== tasks.id))
  }

  //console.log(task)

  const handleClick = () => {
    
   if (navActive===true) {
        setNavActive(false)
        console.log(1)

    } else {
        console.log(2)
        return setNavActive(true)

    } 
}

  return (
    <div className='app' >
      <Seacrh setActive = {setModelActive}></Seacrh>
      <Sidebar 
        active = {navActive} 
        setActive = {setNavActive} 
        status = {handleClick}>
      </Sidebar>

      <hr style={{
          backgroundColor: '#fff',
          borderColor : '#fff'}}>
      </hr>

      {task.map(task => <TaskItem remove = {removeTask} tasks = {task} setTasks = {setTask} key = {task.id}/>)}

      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask createTasks = {createTask} />
      </Model>
    </div>
  );
}

export default App;
