import { FaArrowRight } from "react-icons/fa6";

const Accomplish = () => {
  return (
    <div className=" mt-8">
      
      <div className="relative bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white rounded-lg max-w-7xl mx-auto p-8 flex flex-col items-center overflow-hidden">
       
        <div className="absolute top-0 left-0 w-40 h-40 border-[4px] border-white-600 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        
       
        <div className="absolute bottom-0 right-0 w-40 h-40 border-[4px] border-white-600 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>

        
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-left md:text-center">
          See all that you can accomplish with Hubnex Labs
        </h1>
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 border border-white rounded-md hover:bg-gray-800 transition">
          Connect Sales <FaArrowRight />
        </button>
      </div>
      <div className="space-y-6 mt-8">
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 px-4">
          <h1 className="text-4xl font-bold">
            Let’s grow 💪 <br />
            together with the faster ecosystem
          </h1>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 border border-white rounded-full hover:bg-gray-800 transition">
            Contact Us <FaArrowRight />
          </button>
        </div>
        <hr className="border-t border-gray-300 mx-auto w-4/5" />
      </div>
    </div>
    
  );
};

export default Accomplish;
