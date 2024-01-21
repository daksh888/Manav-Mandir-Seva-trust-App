import Footer from '../../components/Footer';
import NavScrollExample from '../../components/Navbar';
import HeadingOurActivities from './HeadingOurActivities';
import './OurActivitieStyle.scss';
import TextSectionOurActivities from './TextSectionOurActivities';

const OurActivities = () => {
    return(
        <>
        <NavScrollExample></NavScrollExample>
        <HeadingOurActivities></HeadingOurActivities>
        <TextSectionOurActivities></TextSectionOurActivities>
        <Footer></Footer>
        </>
    );


}

export default OurActivities;