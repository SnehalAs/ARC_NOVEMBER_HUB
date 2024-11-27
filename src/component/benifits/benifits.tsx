import RetroGrid from '../../components/ui/retro-grid';
import './benifits.css'
const Benefits = () => {
  return (
    <div className="benefits-container">
       <RetroGrid/>
      <h1 className="benefits-title">Benefits to Join Hubnex Labs</h1>
     
      <div className="benefits-row">
   
        <div className="benefit-card">
          <img
            src="/assets/ontimedelivery.svg"
            alt="On Time Delivery"
            className="card-image"
          />
          <div className="card-content black-bg">
            <h3>On Time Delivery</h3>
            <p>We deliver the quality you need on time.</p>
          </div>
        </div>

       
        <div className="benefit-card">
          <div className="card-content black-bg">
            <h3>Dedicated Project Manager</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img
            src="/assets/support.svg"
            alt="Project Manager"
            className="card-image"
          />
          <div className="card-content black-bg">
            <h3>24 × 7 Round-the-clock Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        
        <div className="benefit-card">
          <img
            src="/assets/satisfaction.svg"
            alt="Customer Satisfaction"
            className="card-image"
          />
          <div className="card-content black-bg">
            <h3>100% Customer Satisfaction</h3>
            <p>Our top priority is ensuring every customer leaves with a smile.</p>
           
          </div>
          <div  className="card-content black-bg">
          <h3>Escrow Account</h3>
            <p>
              Keeping your money safe with escrow services. Lorem ipsum lorem
              ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
