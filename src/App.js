/* этот проект я начал разрабатывать самостоятельно еще до того, как увидел вакансию
   здесь нет файлов typescript, но я уверен, что легко с ними разберусь и изучу все, что потребуется для работы (ведь это масштабируемый JS:) )
   поэтому здесь все написано на js и использован node module для создания sidebar 
   я не совсем понял, что подразумевается под тестами, все что я сделал из тестов это проверки и вывод в консоль
   у меня есть огромное желание и мотивация попасть к вам на стажировку, из-за чего я готов трудиться не покладаю рук */
import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/UI/AddTask";
import Button from "./Components/UI/Button";
import ModalNavBar from "./Components/ModalWindow/ModalNavBar";
import Model from "./Components/ModalWindow/Model";
import Seacrh from "./Components/UI/Seacrh";
import Sidebar from "./Components/UI/Sidebar";
import "./styles/style.css";


function App() {

  const [task, setTask] = useState([                    //tasks
    {id: 1, title: 'Санек', body: 'Староста 61 комнаты СД№8', status: true},
    {id: 2, title: 'Витек', body: 'Render', status: false}
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
      
      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask createTasks = {createTask}/>
      </Model>
    </div>
  );
}

export default App;
