import React from 'react'
import classes from './Search.module.css'
import Button from './Button'

const AddTask = () => {

    
    return (
        <div className = {classes.form} >
          <input
        className={classes.search}
        placeholder = 'Поиск'
        />
          <Button/>
        </div>
    )
  }

export default AddTask;