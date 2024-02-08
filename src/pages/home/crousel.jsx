
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import NavScrollExample from '../../components/Navbar';

function IndividualIntervalsExample() {
  return (
    <>
      <NavScrollExample></NavScrollExample>
      <Carousel>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage text="First slide" imageSrc="/seva.png" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            <p>The idea of eternal service.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <ExampleCarouselImage text="Second slide" imageSrc="/seva2.png" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            <p>Services performed in the institution</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" imageSrc="/seva3.png" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>Services performed in the institution.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default IndividualIntervalsExample;




























