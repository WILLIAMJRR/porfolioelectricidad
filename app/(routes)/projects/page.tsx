"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
    { src: '/assets/electricians/elec1.jpg', alt: 'Imagen 1' },
    { src: "/assets/electricians/elec2.jpg", alt: 'Imagen 2' },
    { src: '/assets/electricians/elec3.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec4.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec5.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec6.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec7.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec8.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec9.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec10.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec11.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec12.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec13.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec14.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec15.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec16.jpg', alt: 'Imagen 1' },
    { src: "/assets/electricians/elec17.jpg", alt: 'Imagen 2' },
    { src: '/assets/electricians/elec18.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec19.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec20.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec21.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec22.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec23.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec24.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec25.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec26.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec27.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec28.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec29.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec30.jpg', alt: 'Imagen 3' },
     { src: '/assets/electricians/elec31.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec32.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec33.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec34.jpg', alt: 'Imagen 3' },
    { src: '/assets/electricians/elec35.jpg', alt: 'Imagen 3' },

    // Agrega más imágenes según sea necesario
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-36 ">
      {/* Contenedor del carrusel */}
      <div className="relative h-56 md:h-96 w-full overflow-hidden rounded-lg flex items-center justify-center">
        {/* Imagen actual */}
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="contain"
          className="absolute"
        />
      </div>
      {/* Indicadores del carrusel */}
      {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div> */}
      {/* Controles del carrusel */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
          </svg>
          <span className="sr-only">Anterior</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
          <span className="sr-only">Siguiente</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
