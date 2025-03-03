import React from 'react';
import './eventBox.css';


export default function EventBox({image , title , handleClick}){

    return (
        <div className="outer-div" onClick={handleClick}>
            <div className="image-div">
                <img src={image}></img>
            </div>
            <div className='title-div'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}