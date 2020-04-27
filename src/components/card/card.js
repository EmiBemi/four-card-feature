import React from 'react';
import './card.css';

const Card = ( props ) => {
    return (
        <div className="card">
            <h1 className="card-title">{props.title}</h1>
            <p className="card-paragraph">{props.children}</p>
            <img className="card-image" src={props.image} alt={props.alt}/>
        </div>
    )
}

export default Card;