import React from 'react';
import './Card.style.css'
export const Card = (props) => {
    return ( 
            <div className="card-container">
                    <div>
                            <img src={`https://robohash.org/${props.monster.id*13}?set=set2&size=180x180`} 
                            alt="Monster"/>
                            <h2>{props.monster.name}</h2>
                    <p>{props.monster.email}</p>
                    </div>
               
            </div>
    
            );
}
 
