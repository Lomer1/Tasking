import React from 'react'
import { useState } from "react";
import classes from './Search.module.css'
import Button from './Button'

const RemoveTask = ({task, setTask}) => {

  /*const [task, setTask] = useState({title: '', body: ''});

  const addTask = (e) => {
    const newTask = {
      ...task, id : Date.now()
    }

    createTasks(newTask)
    setTask({title: '', body: ''})
  }*/
    
    return (
        <div className={classes.form1} >
          <div 
            className={classes.search}
            value = {task.title} 
            type = 'text'
            placeholder = 'Название'
          >{task.title}</div>
          <textarea
            className={classes.search1}
            value = {task.body}
            type = 'text'
            placeholder = 'Описание'
          />
          <Button  style = {{padding: 10, marginTop: 8}}  disabled={!task.title & !task.body}>Сохранить</Button>
        </div>
    )
  }

export default RemoveTask;