import React from "react";

const TypeItems = (props) => {
    const {id, icon, comp} = props;
    return(
        <li className='list-group-item'>
            
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>
                <i className={icon} ></i>
                {comp}
            </label>
        </li>
    )
}
export default TypeItems