import NumberTicker from "../../components/ui/number-ticker";

const integrations = Array(4).fill({
  count: 40,
  description: "Integration",
});

const BigEnough = () => {
  return (
    <div className="py-12 px-4 md:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">We are big enough to deliver and small enough to care</h1>
        <p className="text-lg text-gray-600 mb-8">Teams large and small rely on Hubnex Labs</p>
        <button className="border border-black text-black py-2 px-6 rounded hover:bg-gray-700 transition-colors duration-300">
          Connect Sales →
        </button>
      </div>
      <div className="bg-gradient-to-r from-blue-100 via-pink-100 to-pink-200 py-4 px-6 rounded-lg flex justify-center items-center min-h-[200px] mx-auto w-full md:w-3/4 lg:w-3/5">
        <div className="bg-white rounded-lg shadow-md flex flex-wrap justify-around items-center w-full md:w-4/5 lg:w-3/4 max-w-5xl py-6">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center flex-1 mx-2 md:mx-4 mb-4 md:mb-0">
              <h2 className="text-3xl font-semibold text-purple-700">
                <NumberTicker
                  value={integration.count}
                  direction="up"
                  className="text-center text-purple-700"
                  decimalPlaces={0}
                />
                +
              </h2>
              <p className="text-lg text-gray-800 mt-2">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigEnough;