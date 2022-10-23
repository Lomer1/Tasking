import React from 'react'
import Button from './Button';
import classes from './Search.module.css'

const Seacrh = ({setActive}) => {
    return (
      <div className={classes.place}>
        <div className = {classes.form} >
          <input
        className={classes.search}
        placeholder = 'Поиск'
        />
          <Button onClick ={() => setActive(true)} >Add</Button>
        </div>
      </div>
    )
  }

export default Seacrh;