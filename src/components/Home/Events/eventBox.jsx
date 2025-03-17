import React, { useState } from 'react';
import './eventBox.css';

export default function EventBox({ image, title, handleClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`outer-div ${isHovered ? 'hovered' : ''}`}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-div">
                <img src={image} alt={title} />
                <div className="overlay" />
            </div>
            <div className='title-div'>
                <h3>{title}</h3>
                <div className="join-now">
                    <span>Register</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33331 8H12.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 3.33337L12.6667 8.00004L8 12.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}