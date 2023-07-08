import React, { useRef, useEffect, useState } from "react";

const Slider = ({ slides, interval }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideTo = (index) => {
    setCurrentIndex(index);
    sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  useEffect(() => {
    let timer;
    const slideInterval = interval || 5000; // Default interval: 5 seconds

    const autoSlide = () => {
      const newIndex = (currentIndex + 1) % slides.length;
      slideTo(newIndex);
    };

    timer = setInterval(autoSlide, slideInterval);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, slides, interval]);

  return (
    <div className="slider" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div className="slide" key={index}>
          {slide}
        </div>
      ))}
    </div>
  );
};

export default Slider;
