import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

function AboutSection() {
  return (
    <div className="about-section-container">
      <div className="about-section-text-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-section-text-img-container">
        <div className="about-section-img">
          <img src="/2.png" alt="img" />
        </div>

        <div className="about-section-row-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          blanditiis cupiditate rerum laboriosam repellat eveniet neque sint
          quod ducimus dolor eos! Iure eligendi velit quidem expedita nesciunt
          reprehenderit vitae suscipit, dicta cumque nostrum modi error laborum
          qui provident molestiae minus perferendis, voluptatibus et rem
          aspernatur architecto. Ducimus esse ipsum iste.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Molestias, blanditiis cupiditate
          rerum laboriosam repellat eveniet neque sint quod ducimus dolor eos!
          Iure eligendi velit quidem expedita nesciunt reprehenderit vitae
          suscipit, dicta cumque nostrum modi error laborum qui provident
          molestiae minus perferendis, voluptatibus et rem aspernatur
          architecto. Ducimus esse ipsum iste
        </div>
      </div>
    </div>
    // <Container className='about-section-container'>
    //   <Row className='about-section-row'>

    //     <Col className='about-section-text'>
    //       <Row><h1 className='about-section-text-heading'>About Us</h1></Row>
    //       <Row className='about-section-row-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi necessitatibus commodi perferendis aperiam laudantium asperiores ratione animi ipsa consequatur? Molestiae perferendis omnis perspiciatis assumenda dolorum quaerat, fugit iusto sequi, velit cumque rerum vel. Atque voluptatum rerum consectetur praesentium aspernatur esse mollitia dolorum voluptas tempora eius tempore nihil, sequi dolores saepe.Eligendi necessitatibus commodi perferendis aperiam laudantium asperiores ratione animi ipsa consequatur.</Row>
    //       <Row ><Button variant="success" className='about-section-text-button' rounded >Know more</Button>{' '}</Row>
    //       </Col>
    //     <Col xs={6} md={4}>
    //       <Image className='about-section-img' src="/2.png" rounded  alt='img'/>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default AboutSection;
