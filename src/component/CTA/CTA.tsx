import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-400 rounded-lg shadow-lg p-4 sm:p-6 my-8">
      <div className="flex items-center justify-between gap-4">
      
        <div className="flex items-center gap-4">
          
          <div className="flex-shrink-0">
            <img src="/assets/crown.svg" alt="Crown Icon" className="w-10 sm:w-12" />
          </div>

         
          <div>
            <p className="text-white text-sm sm:text-base font-medium">
              Work better, together
            </p>
            <h1 className="text-white text-base sm:text-xl font-semibold">
              Get Evaluate Your Business score for Free!
            </h1>
          </div>
        </div>

        <div>
          <button className="flex items-center whitespace-nowrap bg-purple-700 text-white text-sm sm:text-base font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-purple-800 transition-transform transform hover:scale-105">
            Check Now!
            <FaArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
