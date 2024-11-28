import "./CTA.css";
import { FaArrowRight } from "react-icons/fa6";
const CTA = () => {
  return (
    <div className='newsletter-container'>
      <div className='newsletter-header'>
        <div className='newsletter-header-left'>
          <div className='inner-left'>
            <img src='/assets/crown.svg' alt='' />
          </div>
          <div className='inner-right'>
            <p>Work Better, together</p>
            <h1>Get Evaluate Your Business Score For Free!</h1>
          </div>
        </div>
        <div className='newsletter-header-right'>
          <button className='check'>
            Check Now! 
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div> 
  );
};

export default CTA;
