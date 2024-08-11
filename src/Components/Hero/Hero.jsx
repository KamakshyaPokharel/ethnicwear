import React, { useState } from 'react';
import './Hero.css'; 


import image1 from '../Assets/hero11.webp';
import image2 from '../Assets/kids33.webp';

const Hero = () => {
    const images = [
        image1,
        image2,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel-container">
            <button onClick={goToPrevious} className="carousel-button prev">❮</button>
            <div className="image-wrapper">
                <img src={images[currentIndex]} alt="current slide" className="carousel-image" />
            </div>
            <button onClick={goToNext} className="carousel-button next">❯</button>
        </div>
    );
};

export default Hero;

