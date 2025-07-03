import React from 'react';

import './ServiceCard.css';


function Card({image}){
    return (
        <div className='card'>
            <img src={image}/>
        </div>
    )
}


export default Card;