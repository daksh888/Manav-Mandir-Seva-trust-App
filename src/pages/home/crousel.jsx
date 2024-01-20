import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";

import NavScrollExample from '../../components/Navbar';


function IndividualIntervalsExample() {
  return <>
    <NavScrollExample></NavScrollExample>
    <Carousel>
      
      <Carousel.Item interval={1000}>
      
        <ExampleCarouselImage text="First slide" />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
}

export default IndividualIntervalsExample;

// const SimpleCarousel = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
  
//     return (
//       <Slider {...settings}>
//         <div>
//           <img src="https://images.unsplash.com/photo-1703016445291-499e3a438557?q=80&w=1832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" />
//         </div>
//         <div>
//           <img src="https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 2" />
//         </div>
//         <div>
//           <img src="https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 3" />
//         </div>
//         {/* Add more slides as needed */}
//       </Slider>
//     );
//   };

//   export default SimpleCarousel;