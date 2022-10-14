import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/UI/AddTask";
import Button from "./Components/UI/Button";
import Model from "./Components/UI/Model";
import Seacrh from "./Components/UI/Seacrh";
import "./styles/style.css";
import "C:/Programming/ReactF/my-app/node_modules/hamburgers/dist/hamburgers.css";

function App() {

  const [task, setTask] = useState([                    //posts
    {id: 1, title: 'Санек', body: 'Староста 61 комнаты СД№8'},
    {id: 2, title: 'Витек', body: 'Render'}
  ])

  const createTask = (newTask) => {
      setTask([...task, newTask])
  }
  const [modelActive, setModelActive] = useState(false)  //modal window

  const removeTask = (tasks) => {
    setTask(task.filter(p => p.id !== tasks.id))
  }

  console.log(task)

  return (
    <div className='app' >
      <Seacrh setActive = {setModelActive}/>
      <hr style={{
          backgroundColor: '#fff',
          borderColor : '#fff'}}></hr>
      {task.map(task => <TaskItem remove = {removeTask} tasks = {task} setTasks = {setTask} key = {task.id}/>)}
      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask createTasks = {createTask} />
      </Model>
    </div>
  );
}

export default App;
