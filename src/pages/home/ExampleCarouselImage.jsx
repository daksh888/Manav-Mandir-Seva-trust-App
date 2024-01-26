// components/ExampleCarouselImage.jsx

// components/ExampleCarouselImage.jsx

import React from 'react';

const ExampleCarouselImage = ({ text, imageSrc }) => {
  return (
    <div>
      <img
        src={imageSrc}
        alt={`Slide: ${text}`}
        style={{ width: '100%', height: '95vh' }}
      />
    </div>
  );
};

export default ExampleCarouselImage;







