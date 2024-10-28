import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';

const safariPhotos = [
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294329.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294330.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294328.jpg',
];

function SafariList({safaris}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safariPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        {safaris.map((safari, index) => (
            <div key={index} className={`wrapper ${index === currentIndex ? 'active' : ''}`}  >
              <img src={safariPhotos} alt={`Slide ${index + 1}`}/>
              <div className="info">
                <div className="wrapper2">
                  <h2>3 days trip</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam suscipit magni officiis nemo possimus blanditiis.</p>
                </div>
                <div className='add-to-cart'>
                  <h3>From $300</h3>
                  <FaArrowRight/>
                </div>
              </div>
              <h1>{safari.name}</h1>
            </div>
        ))}
    </>
  )
}

export default SafariList