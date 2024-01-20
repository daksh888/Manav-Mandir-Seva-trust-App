import Footer from "../../components/Footer";
import AboutSection from "./AboutSection";
import Volunteer from "./Volunteer";
import IndividualIntervalsExample from "./crousel";
import Ouractivity from "./ouracitivity";
import "./styel.scss";

const Home = () => {
  
    return (
      <>
        
        <IndividualIntervalsExample></IndividualIntervalsExample>
        <AboutSection></AboutSection>
        <Volunteer></Volunteer>
        <Ouractivity></Ouractivity>
        <Footer></Footer>

      </>
    )
  }
  
  export default Home;