import React from "react"
import './eventcard.css'


export default function EventCard({image_link , title_text , onClick}){

    return (
        <div className="main-div" onClick={onClick}>
            <div className="inside-div">
                <div className="image-div">
                    <img src={image_link}></img>
                </div>
                <div className="text-div">
                    <p>{title_text}</p>
                </div>
            </div>
        </div>
    )
}