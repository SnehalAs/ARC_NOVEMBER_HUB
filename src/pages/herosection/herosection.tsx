import { FaStar } from "react-icons/fa";
import "./herosection.css";
import SparklesText from "../../components/ui/sparkles-text";
import NumberTicker from "../../components/ui/number-ticker";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const formattedValue = 5910;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-center lg:text-left">
            <SparklesText
              text="SaaS Growth With Weekly Tips."
              className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl text-left"
            />
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg text-left lg:text-left">
            Clarity gives you the blocks & components you need to create a truly
            professional website, landing page, or admin panel for your SaaS.
            Clarity gives you the blocks & components you need. Clarity gives
            you the blocks.
          </p>

          <div className="flex gap-4 flex-wrap mb-8 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 text-sm sm:text-base">
              Contact Us <FaArrowRight />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base">
              Join Us <FaArrowRight />
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="/assets/person1.svg"
                  alt="Avatar 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/person2.svg"
                  alt="Avatar 2"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/assets/person3.svg"
                  alt="Avatar 3"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <div>
                <div className="text-3xl font-bold">
                  <NumberTicker value={formattedValue} />+
                </div>
                <p className="text-sm text-gray-600">
                  Companies are using & it's growing every day
                </p>
              </div>
            </div>

            <div className="w-px bg-gray-300 h-16 hidden md:block"></div>

            <div className="flex flex-col items-start gap-1">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-800">4.5/5</span>
                <span className="flex ml-2 gap-2">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-blue-600">
                      <FaStar />
                    </span>
                  ))}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by the top companies worldwide
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center lg:ml-20">
          <img
            className="rounded-lg shadow-lg max-w-full"
            src="/assets/hero (1).png"
            alt="Hero"
          />
        </div>
      </div>


      <div className="text-center mb-8 mt-36 text-sm sm:text-base lg:text-2xl font-bold text-black-600">
        Join 4,000+ companies already growing
      </div>

      <div className="overflow-hidden">
        <div className="marquee">
          <div className="marquee-content flex gap-8">
            <img
              src="/assets/companylogo1.svg"
              alt="Logo 1"
              className="w-35 h-35 object-contain"
            />
            <img
              src="/assets/companylogo2.svg"
              alt="Logo 2"
              className="w-35 h-35 object-contain"
            />
            <img
              src="/assets/companylogo3.svg"
              alt="Logo 3"
              className="w-35 h-35 object-contain"
            />
            <img
              src="/assets/companylogo4.svg"
              alt="Logo 4"
              className="w-35 h-35 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
