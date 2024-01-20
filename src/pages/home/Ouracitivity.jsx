import Card from "react-bootstrap/Card";

const Ouractivity = () => {
  return (
    <div className="ouractivity">
      <h2 className="ouractivity-heading">Our Activity</h2>
      <div className="grid-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="ouractivity-img" variant="top" src="/a.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem"}}>
          <Card.Img className="ouractivity-img" variant="top" src="/b.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="ouractivity-img" variant="top" src="/c.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img className="ouractivity-img" variant="top" src="/d.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Ouractivity;
