import React from 'react'
import './ModalNavBar.css'

const ModalNavBar = ({active ,children}) => {

    
    
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className="modal__conteiner">
                <div className={active ? "modal_content active" : "modal_content"} onClick = {e => e.stopPropagation()} >
                    {children} 
                </div> 
            </div>
        </div>
    )
  }

export default ModalNavBar;