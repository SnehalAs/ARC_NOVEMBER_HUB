// import { FaTwitter } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";

// import "./Footer.css";
// const Footer = () => {
//   return (
    
//     <footer className='footer'>

// <div className='main-contact'>
//       <div className='Contact-upper'>
//         <h1>See all that you can accomplish with Hubnex Labs</h1>
//         <button className="contact">
//               Contact Sales <FaArrowRight />
//             </button>
//       </div>
//       <div className='Contact-lower'>
//         <h1>Let’s grow 💪 <br />
//         together with the faster ecosystem</h1>
//         <button className="contactt">
//               Contact Us <FaArrowRight />
//             </button>
//       </div>
//       <div className='horizontal-linee'></div>
//     </div>
//       <div className='footer-content'>
//         <div className='footer-section about'>
//         <div className="logo-container">
    
//        <div className="col-span-1">
//           <div className="flex items-center gap-2 mb-4">
//             <img
//               src="/assets/hubnexlogo.svg"
//               alt="Hubnex Logo"
//               className="w-12 h-auto"
//             />
//       <div className="logo-textt">
//         Hubnex
//         <span className="logo-subtextt">Labs</span>
//       </div>
//     </div>
//     </div>
//     </div>
//           <h2 >About Hubnex Labs</h2>
//           <p>
//             We are a leading IT consultancy with expertise in innovative
//             solutions for modern challenges. Our client-centric approach enables
//             us to design tailored solutions that keep businesses ahead in the
//             ever-evolving digital landscape.
//           </p>
//           <div className='social-icons'>
//             <i>
//               <FaTwitter />
//             </i>
//             <i>
//               <FaFacebookF />
//             </i>
//             <i>
//               <FaInstagram />
//             </i>
//             <i>
//               <FaGithub />
//             </i>
//           </div>
//         </div>
//         <div className='Alllinks'>
//           <div className='footer-section links'>
//             <h3>Company</h3>
//             <ul>
//               <li>About</li>
//               <li>Services</li>
//               <li>Careers</li>
//               <li>For Partners</li>
//             </ul>
//           </div>
//           <div className='footer-section links'>
//             <h3>Help</h3>
//             <ul>
//               <li>Grievance Redressal Policy</li>
//               <li>Community</li>
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//             </ul>
//           </div>
//           <div className='footer-section links'>
//             <h3>Resources</h3>
//             <ul>
//               <li>Blogs</li>
//               <li>Case Studies</li>
//               <li>Carrers</li>
//               <li>Insights</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Contact Section */}
      <div className="space-y-6 py-10">
        <div className="bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white rounded-lg max-w-7xl mx-auto p-8 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4 text-center">
            See all that you can accomplish with Hubnex Labs
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 border border-white rounded-md">
            Contact Sales <FaArrowRight />
          </button>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 px-4">
          <h1 className="text-3xl font-bold">
            Let’s grow 💪 <br />
            together with the faster ecosystem
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 border border-white rounded-md">
            Contact Us <FaArrowRight />
          </button>
        </div>
        <hr className="border-t border-gray-300 mx-auto w-4/5" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {/* About Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img src="/assets/hubnexlogo.svg" alt="Hubnex Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl font-bold">Hubnex</h1>
              <span className="block text-gray-500 text-lg">Labs</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold">About Hubnex Labs</h2>
          <p className="text-gray-600">
            We are a leading IT consultancy with expertise in innovative solutions for
            modern challenges. Our client-centric approach enables us to design tailored
            solutions that keep businesses ahead in the ever-evolving digital landscape.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaGithub className="cursor-pointer hover:text-gray-900" />
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">About</li>
            <li className="hover:text-gray-900 cursor-pointer">Services</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer">For Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">Grievance Redressal Policy</li>
            <li className="hover:text-gray-900 cursor-pointer">Community</li>
            <li className="hover:text-gray-900 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">Blogs</li>
            <li className="hover:text-gray-900 cursor-pointer">Case Studies</li>
            <li className="hover:text-gray-900 cursor-pointer">Careers</li>
            <li className="hover:text-gray-900 cursor-pointer">Insights</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

