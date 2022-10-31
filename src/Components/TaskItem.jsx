import React from 'react'
import { useState } from "react";
import classes from './task.module.css'

const TaskItem = ({setActive, tasks, setTasks}) => {
    
    const [check, setCheck] = useState(false);

    
    
   
    return (
        <div className = {classes.task}>
            <div className={classes.conteiner}  onClick = {() => setActive(true)}>
                <strong className={check? classes.active : classes.description} >{tasks.title}</strong>
                <div className={check? classes.active : classes.description}>{tasks.body}</div>
            </div>
            <label>
                <input className={classes.checkinput} 
                onClick = {() => {
                    if (check) {
                        setCheck(false)
                        tasks.status = false
                        console.log(tasks)
                        
                    } else {
                        setCheck(true)
                        tasks.status = true
                        console.log(tasks)
                        
                    }   
                }}
                type = "checkbox"/>

                <span className={classes.checkbox} >
                </span>
            </label>
        </div>
    )
  }

export default TaskItem;