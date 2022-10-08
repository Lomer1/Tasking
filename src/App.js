import { useState } from "react";
import TaskItem from "./Components/TaskItem";
import AddTask from "./Components/UI/AddTask";
import Button from "./Components/UI/Button";
import Model from "./Components/UI/Model";
import Seacrh from "./Components/UI/Seacrh";
import "./styles/style.css";


function App() {

  const [task, setTask] = useState([
    {id: 1, title: 'Вуз', body: 'Заявление'},
    {id: 2, title: 'Lov', body: 'Gop'}
  ])

  const [modelActive, setModelActive] = useState(false)

  console.log(task)

  return (
    <div >
      <Seacrh setActive = {setModelActive}/>
      <hr></hr>
      {task.map(task => <TaskItem tasks = {task} key = {task.id}/>)}
      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask/>
      </Model>
    </div>
  );
}

export default App;
