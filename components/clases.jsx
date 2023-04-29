import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Class from '@/data/clases';
import 'animate.css';

const Clases = () => {
  const [currentImage, setCurrentImage] = useState(Class[0].image);

  const handleCollapse = (clase) => {
    setCurrentImage(clase.image);
  };

  useEffect(() => {
    const imageEl = document.querySelector('.animate__fadeIn');
    if (imageEl) {
      imageEl.classList.remove('animate__fadeIn');
      void imageEl.offsetWidth;
      imageEl.classList.add('animate__fadeIn');
    }
  }, [currentImage]);

  return (
    <div className='flex flex-wrap justify-center gap-2 pb-32'>
      <div className='w-[700px]'>
        {Class.map((clase) => (
          <div
            key={clase.id}
            tabIndex={0}
            className='collapse mt-2 collapse-arrow border border-base-300 bg-base-100 rounded-box'
            onClick={() => handleCollapse(clase)}
          >
            <div className='collapse-title font-principal  text-2xl font-medium'>
              {clase.title}
            </div>
            <div className='collapse-content'>
              <p className='text-black font-principal text-lg'>{clase.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='animate__animated animate__fadeIn'>
        <Image src={currentImage} className='rounded-2xl' width={600} height={280} />
      </div>
    </div>
  );
};

export default Clases;
