import React from 'react'
import cl from './MyButton.module.css'

const MyButton = ({ children, handleClick }) => {
    return (
        <button className={cl[children]} onClick={handleClick}>
            {children}
        </button>
    )
}

export default MyButton