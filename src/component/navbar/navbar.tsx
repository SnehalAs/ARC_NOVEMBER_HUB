import { IoIosArrowDown } from "react-icons/io";
import { RxArrowTopRight } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

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
    <header className="w-full">
     
      <div className="flex justify-end items-center gap-4 py-2 px-4 text-md font-bold mr-16 mt-4 mb-2">
        {topLinks.map(({ text, href }) => (
          <div key={text} className="flex items-center gap-2">
            <a
              href={href}
              className="flex items-center gap-1 text-gray-800 hover:text-black"
            >
              {text} <RxArrowTopRight />
            </a>
         
            {(text === "Jobpreneur" || text === "Skillup") && (
              <div className="w-[1px] h-5 bg-gray-800"></div>
            )}
          </div>
        ))}
      </div>

     
      <div className="border-t border-black w-90"></div>

   
      <div className="flex justify-between items-center py-4 px-4 lg:px-12">
     
        <img
          src="/assets/hubnexlogo.svg"
          alt="Hubnex Logo"
          className="h-10 w-auto lg:mx-20"
        />

      
        <div className="hidden lg:flex gap-8">
          {bottomLinks.map(({ text, icon }) => (
            <a
              key={text}
              href="#"
              className="flex items-center gap-1 text-gray-800 hover:text-black text-md font-medium"
            >
              {text} {icon}
            </a>
          ))}
        </div>

     
        <div className="flex items-center gap-4 lg:mr-24">
          <button className="text-blue-600 font-medium text-sm hover:underline">
            Login
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            Connect Sales <FaArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
