import React from "react";

function TypeItems(props){
    return(
        <li className='list-group-item'>
            
            <input type="checkbox" id={props.id}/>
            <label htmlFor={props.id}>
                <i className={props.icon} ></i>
                {props.Comp}
            </label>
        </li>
    )
}
export default TypeItems