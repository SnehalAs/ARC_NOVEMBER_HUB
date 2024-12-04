import React from "react";
import NumberTicker from "../../components/ui/number-ticker";
import Globe from "/assets/globe.svg"; 
import DailyhuntLogo from "/assets/publish1.svg";
import TOILogo from "/assets/publish2.svg";
import HindustanLogo from "/assets/publish3.svg";

const StatsSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-12 md:p-16 bg-white border border-gray-200 rounded-lg my-8">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Unleash the full power of data</h1>
        <p className="text-lg md:text-xl text-gray-500 mb-6 leading-relaxed">
          We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-6 mb-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
              <NumberTicker value={60} className="number text-indigo-600 " />+
            </h2>
            <p className="text-lg text-gray-500">Integrations</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
              <NumberTicker value={600} className="number text-indigo-600" />%
            </h2>
            <p className="text-lg text-gray-500">Return on Investment</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">4K+</h2>
            <p className="text-lg text-gray-500">Global Customers</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <span className="text-gray-500">Featured in</span>
          <img src={DailyhuntLogo} alt="Dailyhunt" className="h-8 md:h-10" />
          <img src={TOILogo} alt="TOI" className="h-8 md:h-10" />
          <img src={HindustanLogo} alt="Hindustan Times" className="h-8 md:h-10" />
        </div>
      </div>
      <img src={Globe} alt="Global presence" className="w-full md:w-2/5 mt-8 md:mt-0" />
    </section>
  );
};

export default StatsSection;

