import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-800">

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/hubnexlogo.svg"
              alt="Hubnex Logo"
              className="w-12 h-12"
            />
            <div>
              <h1 className="text-2xl font-bold">Hubnex</h1>
              <span className="block text-gray-500 text-lg">Labs</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold">About Hubnex Labs</h2>
          <p className="text-gray-600">
            We are a leading IT consultancy with expertise in innovative
            solutions for modern challenges. Our client-centric approach
            enables us to design tailored solutions that keep businesses ahead
            in the ever-evolving digital landscape.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaFacebookF className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaGithub className="cursor-pointer hover:text-gray-900" />
          </div>
        </div>

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
            <li className="hover:text-gray-900 cursor-pointer">
              Grievance Redressal Policy
            </li>
            <li className="hover:text-gray-900 cursor-pointer">Community</li>
            <li className="hover:text-gray-900 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-gray-900 cursor-pointer">
              Privacy Policy
            </li>
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

      <div className="text-center text-sm text-gray-500 border-t border-gray-300 py-4">
        © {new Date().getFullYear()} Hubnex Labs. All rights reserved.
      </div>
      
    </footer>
  );
};

export default Footer;

