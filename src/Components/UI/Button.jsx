import React from 'react'
import AddTask from './AddTask';
import classes from './Button.module.css'

const Button = (props) => {

    
    
    return (
        <button className = {classes.btn} onClick = {() => props.active(true)} >Add</button>
    )
  }

export default Button;