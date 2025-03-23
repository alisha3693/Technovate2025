import React from 'react'
import { useState } from 'react'
import './heromodal.css'
import { toast } from 'react-toastify'

export default function HeroModal({ setModalOpen }) {
    const handleClose = () => {
        setModalOpen(false);
    }

    const handleRedirect = (link) => {
        if (link === 'https://rzp.io/rzp/execpass') {
            // Display toast message instead of redirecting
            toast.error("SOLD OUT", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else if (link === 'https://rzp.io/rzp/delpass') {
            toast.error("SOLD OUT", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    return (
        <>
            <div className='modal-overlay' onClick={handleClose}>
                <div className='modal-main-div' onClick={(e) => e.stopPropagation()}>
                    <div className='modal-nav'>
                        <span>Buy Passes</span>
                        <button onClick={handleClose}>X</button>
                    </div>
                    <div className='modal-contact-info'>
                        <h3 className='contact-title'>For Bulk Passes Contact</h3>
                        <div className='contact-list'>
                            <div className='contact-item'>
                                <p>Priyanshu Shrivastava: <a href="https://wa.me/+919935062012" target='_blank'>+91 99350 62012</a></p>
                            </div>
                            <div className='contact-item'>
                                <p>Yash Raj: <a href="https://wa.me/+916203763329" target='_blank'>+91 62037 63329</a></p>
                            </div>
                            <div className='contact-item'>
                                <p>Debashish Padhy: <a href="https://wa.me/+918374344812" target='_blank'>+91 83743 44812</a></p>
                            </div>

                        </div>
                    </div>
                    <hr />
                    <div className='modal-card-div'>
                        <div className='modal-card' style={{ backgroundColor: "rgba(211,215,211,0.8)", position: "relative", cursor: "default" }}>
                            <div style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "inherit",
                                zIndex: 2
                            }}>
                                <p style={{
                                    color: "white",
                                    textAlign: "center",
                                    padding: "10px",
                                    fontWeight: "bold"
                                }}>SOLD OUT</p>
                            </div>

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
                            <p><strong>₹1000</strong></p>
                        </div>
                    </div>
                    <div className='modal-info'>
                        <div className='contact-item'>
                            <p><strong>For accomodation contact our Hospitality Team </strong>:Mohd Kaif : <a href="https://wa.me/+918449194200" target="_blank">+91 84491 94200</a></p>
                            <p style={{
                                fontStyle: 'italic',
                                color: '#ff9800',
                                fontWeight: 'bold'
                            }}>* Accomodation is Limited</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}