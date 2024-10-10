import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const images = [
    "MainBanner01.png",
    "MainBanner02.png",
    "MainBanner03.png",
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 이미지 변경
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === images.length) {
            setTimeout(() => {
                setCurrentIndex(0);
                sliderRef.current.style.transition = 'none';
                setTimeout(() => {
                    sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
                }, 50);
            }, 3000); // 이미지가 변경되는 시간을 조절합니다.
        }
    }, [currentIndex]);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slider">
            <div
                className="slider-inner"
                ref={sliderRef}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: 'transform 0.5s ease-in-out' // 모든 슬라이드에 부드러운 오른쪽 슬라이드를 적용합니다.
                }}
            >
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`slide ${index}`} className="slide-image" />
                ))}
            </div>
            <ul className="slider-buttons">
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={index === currentIndex ? 'active' : ''}
                        onClick={() => handleButtonClick(index)}
                    >
                        <button>
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImageSlider;
