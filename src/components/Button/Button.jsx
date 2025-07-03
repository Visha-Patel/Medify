import React from 'react'
import './Button.css';


export default function Button({children , onClick, type ,id}){
    return (
        <button id={id} onClick={onClick} type={type}>{children}</button>
    )
}