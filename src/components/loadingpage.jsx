import React from 'react';
import { motion } from 'framer-motion';
import techlogo from '../assets/Images/Bg/tech_logo.png';
import './Loading.css'; 

const imageVariants = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.1,
        transition: {
            stiffness: 300,
            duration: 0.8,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
};

export default function Loading() {
    return (
        <div className="loading-container">
            <motion.div
                className="loading-image"
                variants={imageVariants}
                animate="animate"
                initial="initial"
            >
                <img src={techlogo} className="object-cover" alt="Tech Logo" />
            </motion.div>
        </div>
    );
}
