import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/UI/AddTask";
import Button from "./Components/UI/Button";
import ModalNavBar from "./Components/ModalWindow/ModalNavBar";
import Model from "./Components/ModalWindow/Model";
import Seacrh from "./Components/UI/Seacrh";
import Sidebar from "./Components/UI/Sidebar";
import "./styles/style.css";
import ModalTaskItem from "./Components/ModalWindow/ModalTaskItem";

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
  const [modalTaskActive, setModalTaskActive] = useState(false)
 
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

      <Sidebar  active = {navActive} setActive = {setNavActive} status = {handleClick}/>
      
      <ModalNavBar active = {navActive}>        
        <Button style =  {{flexBasis: '10%', margin: 10}} >Tasks</Button>
        <Button style =  {{flexBasis: '10%', margin: 10}} >Tasks</Button>
        <Button style =  {{flexBasis: '10%', margin: 10}} >Tasks</Button>
      </ModalNavBar>

      <hr style={{
          backgroundColor: '#fff',
          borderColor : '#fff'}}>
      </hr>

      {task.map(task => <TaskItem setActive = {setModalTaskActive} remove = {removeTask} tasks = {task} setTasks = {setTask} key = {task.id}/>)}
      <ModalTaskItem active = {modalTaskActive} setActive = {setModalTaskActive}>
        <TaskItem/>
      </ModalTaskItem>

      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask createTasks = {createTask} />
      </Model>
    </div>
  );
}

export default App;
