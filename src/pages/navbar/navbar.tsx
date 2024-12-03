// import { IoIosArrowDown } from "react-icons/io";
// import { RxArrowTopRight } from "react-icons/rx";
// import { FaArrowRight } from "react-icons/fa";
// import "./navbar.css";

// const Navbar = () => {
//   const topLinks = [
//     { text: "Jobpreneur", href: "#jobpreneur" },
//     { text: "Skillup", href: "#skillup" },
//     { text: "TechFund", href: "#techfund" },
//   ];

//   const bottomLinks = [
//     { text: "Explore Services", icon: <IoIosArrowDown /> },
//     { text: "Resources", icon: <IoIosArrowDown /> },
//     { text: "Community", icon: <IoIosArrowDown /> },
//     { text: "About" },
//   ];

//   return (
//     <header>
//       <div className="header-top">
//         {topLinks.map(({ text, href }) => (
//           <a key={text} href={href} className="header-top-link">
//             {text} <RxArrowTopRight />
//           </a>
//         ))}
//       </div>

//       <div className="horizontal-line"></div>

//       <div className="header-bottom">
//         <img
//           src="/assets/hubnexlogo.svg"
//           alt="Hubnex Logo"
//           className="header-bottom-logo"
//         />

//         <div className="header-bottom-links">
//           {bottomLinks.map(({ text, icon }) => (
//             <a key={text} href="#">
//               {text} {icon}
//             </a>
//           ))}
//         </div>

//         <div className="header-bottom-btns">
//           <button className="login">Login</button>
//           <button className="Blue">
//             Connect Sales <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

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
      {/* Top Links */}
      <div className="flex justify-end items-center gap-4 py-2 px-4 text-md font-bold">
        {topLinks.map(({ text, href }) => (
          <a
            key={text}
            href={href}
            className="flex items-center gap-1 text-gray-800 hover:text-black"
          >
            {text} <RxArrowTopRight />
          </a>
        ))}
      </div>

      {/* Divider Line */}
      <div className="border-t border-black"></div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center py-4 px-4 lg:px-12">
        {/* Logo */}
        <img
          src="/assets/hubnexlogo.svg"
          alt="Hubnex Logo"
          className="h-10 w-auto"
        />

        {/* Bottom Links */}
        <div className="hidden lg:flex gap-8">
          {bottomLinks.map(({ text, icon }) => (
            <a
              key={text}
              href="#"
              className="flex items-center gap-1 text-gray-800 hover:text-black text-sm font-medium"
            >
              {text} {icon}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
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
