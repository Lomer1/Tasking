import React, { Component } from 'react'
import "C:/Programming/ReactF/my-app/node_modules/hamburgers/dist/hamburgers.css";


const Sidebar = ({active, setActive, children}) => {

    return (
        <div>
            <button className={ active ?"hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"} type="button" onClick={() => setActive(false)}>
                <span className="hamburger-box">
                    <span className="hamburger-inner">{children}</span>
                </span>
            </button>
        </div>
    )
}

export default Sidebar;