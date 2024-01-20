import HeadingAboutUs from "./HeadingAboutUs";
import NavScrollExample from "../../components/Navbar";
import Footer from "../../components/Footer";
import TextAboutUs from "./TextAboutUs";

const AboutUs = () => {
    return(
        <>
        <NavScrollExample></NavScrollExample>
        <HeadingAboutUs></HeadingAboutUs>
        <TextAboutUs></TextAboutUs>
        <Footer></Footer>
        </>
    );

}

export default AboutUs;