import { IoIosArrowDown } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const topLinks = [
    { text: "Jobpreneur", href: "#jobpreneur" },
    { text: "Skillup", href: "#skillup" },
    { text: "TechFund", href: "#techfund" },
  ];
  const bottomLinks = [
    { text: "Explore Services", icon: <IoIosArrowDown /> },
    { text: "Resources", icon: <IoIosArrowDown /> },
    { text: "Community", icon: <IoIosArrowDown /> },
    { text: "About" },
  ];

  return (
    <header>
     
      <div className="header-top">
        {topLinks.map(({ text, href }) => (
          <a key={text} href={href} className="header-top-link">
            
        
          {text}<RxArrowTopRight />
          </a>
        ))}
      </div>

     
      <div className="horizontal-line"></div>

     
      <div className="header-bottom">
        <img
          src="/assets/hubnexlogo.svg"
          alt="Hubnex Logo"
          className="header-bottom-logo"
          style={{ marginLeft: "120px" }}
        />

        <nav className="header-bottom-links">
          {bottomLinks.map(({ text, icon }) => (
            <a key={text} href="#">
              {text} {icon}
            </a> 
          ))}
        </nav>

        <div className="header-bottom-btns">
          <button className="login">Login</button>
          <button className="Blue">
            Connect Sales <FaArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

