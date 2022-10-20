import React from 'react'
import classes from './task.module.css'
import Button from './UI/Button';

const TaskItem = (props) => {
    return (
        <div type = 'button' className = {classes.task} onClick = {() => props.setActive(true)}>
            <div className={classes.conteiner}>
                <strong className={classes.description} >{props.tasks.title}</strong>
                <div className={classes.description}>{props.tasks.body}</div>
            </div>
            <Button style = {{margin: 0}} onClick = {() => props.remove(props.tasks)} >Delete</Button>
        </div>
    )
  }

export default TaskItem;