import React from 'react';
import './search.style.css';

export const Search = (props) => {
    return ( 
        <div>
            <input className="monster-search" 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={props.handleChange}>
            </input>
            
        </div>
       
     );
}