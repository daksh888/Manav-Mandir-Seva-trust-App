import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./styel.scss";

const Volunteer = () => {
  return (
    <>
      <div className="volunteer-wrapper">
        <Image
          className="volunteer-back-img"
          src="/d.png"
          fluid
        />

        <div className="upper-div">
            <Row>
                <Col  ><Image className="upper-div-img" src="/c.png" fluid />;
                </Col >
                <Col className="upper-div-text">
                <Row><h3>Join our community</h3></Row>
                
                <Row><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias, est inventore porro accusamus aut exercitationem unde reiciendis optio numquam debitis necessitatibus illo quasi laborum? Quas neque commodi hic recusandae.</p></Row>
                <Row className="upper-div-text-button"><Button variant="success">Beacome a Volunteer</Button></Row>
                <Row className="upper-div-text-button"><Button variant="success">Make a Donation</Button></Row>
                </Col >
            </Row>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
