import React from 'react'
import {useState} from 'react'
import './heromodal.css'

export default function HeroModal({setModalOpen}){


        const handleClose =() =>{
            setModalOpen(false);
        }

        const handleRedirect = (link)=>{
            window.open(link , '__blank')
        }

        return (
            <>
            <div className='modal-overlay' onClick={handleClose}>
                <div className='modal-main-div' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-nav'>
                        <span>Buy Passes</span>
                        <button onClick={handleClose}>X</button>
                    </div>
                    <hr/>
                    <div className='modal-card-div'>
                        <div className='modal-card' style={{backgroundColor:"rgba(252, 229, 102, 0.8)"}}  onClick={()=>handleRedirect('https://rzp.io/rzp/execpass')}>
                            <svg fill="#333" height="200px" width="200px" version="1.1" id="Capa_1" 
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 220 220" xml:space="preserve" opacity="0.9">
                            <g id="SVGRepo_iconCarrier"> 
                            <path d="M220,98.865c0-12.728-10.355-23.083-23.083-23.083s-23.083,10.355-23.083,23.083c0,5.79,2.148,11.084,5.681,15.14 
                                l-23.862,21.89L125.22,73.002l17.787-20.892l-32.882-38.623L77.244,52.111l16.995,19.962l-30.216,63.464l-23.527-21.544 
                                c3.528-4.055,5.671-9.344,5.671-15.128c0-12.728-10.355-23.083-23.083-23.083C10.355,75.782,0,86.137,0,98.865 
                                c0,11.794,8.895,21.545,20.328,22.913l7.073,84.735H192.6l7.073-84.735C211.105,120.41,220,110.659,220,98.865z"/>
                            </g>
                            </svg>

                            <p>EXECUTIVE PASS</p>
                            <p><s>₹1200</s> <strong>₹1000</strong></p>
                        </div>
                        <div className='modal-card' style={{backgroundColor:"rgba(211,215,211,0.8)"}} onClick={()=>handleRedirect('https://rzp.io/rzp/delpass')}>
                        
                        <svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 351.92 351.92" xml:space="preserve" 
    fill="#333" opacity="0.9">
    <g id="SVGRepo_iconCarrier"> 
        <path d="M327.859,299.06l-49.018-50.128l23.999-23.468l12.799-12.513l-8.342-8.533l-12.799,12.513 
        l-40.3-41.213l95.339-97.499l-18.981-60.6L269.544,0L175.96,95.709L82.376,0.006l-61.011,17.62l-18.981,60.6l95.339,97.499 
        l-40.3,41.213l-12.799-12.513l-8.342,8.533L49.08,225.47l23.999,23.468l-49.018,50.128l-13.33-13.038l-8.342,8.533l13.33,13.038 
        l31.994,31.284l13.33,13.038l8.342-8.533l-13.33-13.038l49.018-50.128l23.999,23.468l12.799,12.513l8.342-8.533l-12.799-12.513 
        l38.546-39.417l38.546,39.417l-12.799,12.513l8.342,8.533l12.799-12.513l23.999-23.468l49.018,50.128l-13.33,13.038l8.342,8.533 
        l13.33-13.038l31.994-31.284l13.33-13.038l-8.342-8.533L327.859,299.06z"/>
    </g>
</svg>

                        <p>DELEGATE PASS</p>
                        <p><s>₹1000</s> <strong>₹800</strong></p>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
}