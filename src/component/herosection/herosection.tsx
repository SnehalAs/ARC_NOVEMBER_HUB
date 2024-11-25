import './herosection.css';
import { FaArrowRight  } from "react-icons/fa"; 
import NumberTicker from '../../components/ui/number-ticker';
import SparklesText from '../../components/ui/sparkles-text';

const Hero = () => {
  const formattedValue = 5910;
  return (
    <>
      <div className="text">
        <div className="left-content">
         
        <SparklesText text = "SaaS Growth With Weekly Tips."  className='small-text'/>
          <p className="para">
            Clarity gives you the blocks & components you need to create
            a truly professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives you the blocks.
          </p> 

          <div className="btn-container">
            <button className="contact">
              Contact Us <FaArrowRight />
            </button>
            <button className="Join">
              Join Us <FaArrowRight />
            </button>
          </div>

          <div className="company-stats">
          

<div className="stats-section">
      <div className="stats-row">
         <div className="avatars">
           <img
             src="src\assets\person1.svg"
             alt="Avatar 1"
             className="avatar"
           />
           <img
             src="src\assets\person2.svg"
             alt="Avatar 2"
             className="avatar"
           />
           <img
             src="src\assets\person3.svg"
             alt="Avatar 3"
             className="avatar"  />
         </div>
         <div className="stats">
           <NumberTicker
             value={formattedValue}
             direction="up"
            //  delay={30}
             decimalPlaces={0}
             className="ticker"
           />
           <span className="plus-sign">+</span>
         </div>
       </div>
       <p>Companies are using & it's growing every day</p>
    </div>


            <div className="divider"></div>
            <div className='Mystat-item'>
              <div className='Myrating My-rating'>
                <span className='Mystat-number'>4.5/5<span className='Mystars'>★★★★★</span></span>
                <span className="Myrtext" >Trusted by the top companies worldwide</span>
              </div>
              </div>
              </div>
        </div>

        <div>
          <img className="img" src="src\assets\hero (1).png" alt="Hero" />
        </div>
      </div>
      <span className='join'>Join 4,000+ companies already growing</span>

      <div className="marquee-container">
        <div className="marquee">
          <img src="src\assets\companylogo1.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo2.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo3.svg" alt="Company Logo" width="100" />
          <img src="src\assets\companylogo4.svg" alt="Company Logo" width="100" />
        </div>
      </div>
    </>
  );
};

export default Hero;

