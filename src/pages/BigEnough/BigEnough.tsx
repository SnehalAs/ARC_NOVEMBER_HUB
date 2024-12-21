import NumberTicker from "../../components/ui/number-ticker";

const integrations = Array(4).fill({
  count: 40,
  description: "Integration",
});

const BigEnough = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-20 xl:px-32">
    
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          We are big enough to deliver and small enough to care
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
          Teams large and small rely on Hubnex Labs
        </p>
        <button className="border border-black text-black py-2 px-6 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300">
          Connect Sales →
        </button>
      </div>

     
      <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-pink-200 py-4 px-4 md:px-8 lg:px-12 xl:px-20 rounded-lg w-full mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-md flex flex-wrap md:flex-nowrap justify-between items-center w-full py-6 lg:py-10">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex-1 min-w-[75px] md:min-w-[150px] text-center mx-1 lg:mx-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-700">
                <NumberTicker
                  value={integration.count}
                  direction="up"
                  className="text-center text-purple-700"
                  decimalPlaces={0}
                />
                +
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-gray-800 mt-1 lg:mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigEnough;
