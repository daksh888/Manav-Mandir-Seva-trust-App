// components/ExampleCarouselImage.jsx
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
      <img
        // src={`src/assests/b.png?text=${text}`}
        src="/b.png"
        alt={`Slide: ${text}`}
        style={{ width: '100%', height: '95vh' }}
      />
    </div>
  );
};

export default ExampleCarouselImage;
