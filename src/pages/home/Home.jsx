import Footer from "../../components/Footer";
// import NavScrollExample from "../../components/Navbar";  
import AboutSection from "./AboutSection";
import Volunteer from "./Volunteer";
import IndividualIntervalsExample from "./crousel";
import Ouractivityhome from "./ouracitivity";
import "./styel.scss";

const Home = () => {
  
    return (
      <>
       
        <IndividualIntervalsExample></IndividualIntervalsExample>
        <AboutSection></AboutSection>
        <Volunteer></Volunteer>
        <Ouractivityhome></Ouractivityhome>
        <Footer></Footer>

      </>
    )
  }
  
  export default Home;