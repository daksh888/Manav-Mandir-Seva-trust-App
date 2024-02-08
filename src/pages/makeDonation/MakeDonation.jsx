import Footer from "../../components/Footer";
import NavScrollExample from "../../components/Navbar";
import "./MakeDonation.scss";

const MakeDonation = () => {
  return (
    <>
      <NavScrollExample></NavScrollExample>
      
      <div className="make-donation-container">
        
        <div className="inner-container">
          <div className="img-text">
          <p>Scan For Payment</p>
             <img src="/scanner.png" alt="img" />
          </div>  
         
          <div className="text-container">
            <p>Account Name : Mangal Mandir Manav Seva Parivar</p>
            <p>Bank Name : Bank of Baroda</p>
            <p>Account No : 39570100013788</p>
            <p>IFSC CODE : BARB0BAVLAX</p>
            <p>PAN No. : AAETM7133J</p>
            <p>Branch : Bavla</p>
            <p>Donations to organizations are exempt under section 80G(5) of income tax.</p>
            <p>CSR funds are acceptable.</p>
            
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default MakeDonation;
