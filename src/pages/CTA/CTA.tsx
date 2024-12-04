import { FaArrowRight } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-300 rounded-lg shadow-lg p-5 md:p-6 lg:p-8 my-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="flex justify-center md:justify-start">
            <img src="/assets/crown.svg" alt="" className="w-8 md:w-10" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-white text-base md:text-lg mb-2">Work Better, together</p>
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">Get Evaluate Your Business Score For Free!</h1>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <button className="flex items-center justify-center bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition-transform duration-200 transform hover:scale-105">
            Check Now!
            <FaArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
