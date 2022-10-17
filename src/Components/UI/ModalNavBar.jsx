import React from 'react'
import './ModalNavBar.css'

const ModalNavBar = ({children}) => {

    
    
    return (
        <div className={"modal"}>
            <div className="modal__conteiner">
                <div className={"modal_content"} onClick = {e => e.stopPropagation()} >
                    {children} ffffffffffff
                </div> 
            </div>
        </div>
    )
  }

export default ModalNavBar;