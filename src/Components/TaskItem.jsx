import React from 'react'
import classes from './task.module.css'

const TaskItem = (props) => {
    return (
        <div className = {classes.task}>
            <strong>{props.tasks.title}</strong>
            <div>{props.tasks.body}</div>
        </div>
    )
  }

export default TaskItem;