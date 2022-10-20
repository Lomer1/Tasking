import React from 'react'
import { useState } from "react";
import classes from './Search.module.css'
import Button from './Button'

const AddTask = ({createTasks}) => {

  const [task, setTask] = useState({title: '', body: ''});

  const addTask = (e) => {
    const newTask = {
      ...task, id : Date.now()
    }

    createTasks(newTask)
    setTask({title: '', body: ''})
  }
    
    return (
        <form className={classes.form1} >
          <input 
            className={classes.search}
            value = {task.title} 
            type = 'text'
            onChange = {e => setTask({...task, title: e.target.value})}
            placeholder = 'Название'
          />
          <textarea
            className={classes.search1}
            value = {task.body}
            type = 'text'
            onChange = {e => setTask({...task, body: e.target.value})}
            placeholder = 'Описание'
          />
          <Button  style = {{padding: 10, marginTop: 8}} onClick = {addTask} disabled={!task.title & !task.body}>Добавить задачу</Button>
        </form>
    )
  }

export default AddTask;