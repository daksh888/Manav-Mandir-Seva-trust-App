import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


const Ouractivityhome = () => {
  const navigate = useNavigate()
  function handlenavigate(){
    
    navigate('/our-activities')
    

  }


  return (
    <div className="ouractivity">
      <h2 className="ouractivity-heading">Our Activity</h2>
      <div className="grid-container" id="ouractivitie">
        <Card style={{ width: "18rem" }} onClick={handlenavigate} className="ouractivity-card">
          <Card.Img className="ouractivity-img" variant="top" src="/a.png"  />
          <Card.Body>
            <Card.Title>Services performed in the institution</Card.Title>
            {/* <Card.Text>
            To bring unclaimed people to the organization who are roaming on the road.
            </Card.Text> */}
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem"}} onClick={handlenavigate} className="ouractivity-card">
          <Card.Img className="ouractivity-img" variant="top" src="/mahanubha2.png" />
          <Card.Body>
            <Card.Title>Political dignitaries visit the institute</Card.Title>
            {/* <Card.Text>
            Honorable Home Minister of India Mr. Amitbhai Shah and President of the Institute Mr. Dineshbhai Lathiya had a congratulatory visit.
            </Card.Text> */}
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} onClick={handlenavigate} className="ouractivity-card">
          <Card.Img className="ouractivity-img" variant="top" src="/seva4.png" />
          <Card.Body>
            <Card.Title>Reunion with family through institution</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              
            </Card.Text> */}
            
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} onClick={handlenavigate} className="ouractivity-card">
          <Card.Img className="ouractivity-img" variant="top" src="/aabhar.png" />
          <Card.Body>
            <Card.Title>An expression of thanks</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Ouractivityhome;
