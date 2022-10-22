import React from 'react'
import classes from './Model.css'

const Model = ({active, setActive, children}) => {

    
    
    return (
        <div className={active ? "model active" : "model"} onClick = {() => setActive(false)}>
            <div className="conteiner">
                <div className={active ? " model__content active" : "model__content"} onClick = {e => e.stopPropagation()} >
                    {children}
                </div> 
            </div>
        </div>
    )
  }

export default Model;