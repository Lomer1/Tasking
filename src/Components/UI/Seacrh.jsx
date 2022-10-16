import React from 'react'
import Button from './Button';
import classes from './Search.module.css'
import Sidebar from './Sidebar';

const Seacrh = ({setActive}) => {
    return (
      <div className={classes.place}>
        <div className = {classes.form} >
          <Sidebar/>
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