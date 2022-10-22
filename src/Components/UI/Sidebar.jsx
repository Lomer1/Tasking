import React, { Component } from 'react'
import "/node_modules/hamburgers/dist/hamburgers.css";


const Sidebar = ({active, setActive, status, children}) => {

    

    return (
        <div>
            <button  style = {{position: 'absolute', top:0, left:0, zIndex: 20}}
                     className={ active ?"hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} 
                     type="button" 
                     onClick = {() => setActive(status)}>
                        
                <span className="hamburger-box" >
                    <span className="hamburger-inner">{children}</span>
                </span>
            </button>
        </div>
    )
}

export default Sidebar;