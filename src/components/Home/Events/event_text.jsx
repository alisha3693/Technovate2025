import React from 'react'
import event_image from '../../../assets/Images/Bg/eventsText.png'
import './eventText.css'


export default function EventText(){

    return (
        <div className='event-text'>
           <img src={event_image}></img>
        </div>
    );

}