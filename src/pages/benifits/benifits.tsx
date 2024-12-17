import RetroGrid from '../../components/ui/retro-grid';

const Benefits = () => {
  return (
    <div className="benefits-container px-4 py-8 md:px-8 md:py-12 bg-white text-center font-sans">
      <RetroGrid />
      <h1 className="benefits-title text-3xl md:text-4xl font-bold text-black mb-6 mt-10">
        Benefits to Join Hubnex Labs
      </h1>

      <div className="benefits-row flex flex-wrap justify-around gap-6">
        
        <div className="benefit-card bg-gray-100 rounded-lg overflow-hidden shadow-lg p-4 transform transition-transform hover:translate-y-[-5px] w-full md:w-[300px]">
          <img
            src="/assets/ontimedelivery.svg"
            alt="On Time Delivery"
            className="card-image w-full h-auto rounded-lg"
          />
          <div className="card-content mt-4 p-4 bg-black text-white rounded-lg">
            <h3 className="text-xl mb-2">On Time Delivery</h3>
            <p className="text-gray-400 text-sm">We deliver the quality you need on time.</p>
          </div>
        </div>

       
        <div className="benefit-card bg-gray-100 rounded-lg overflow-hidden shadow-lg p-4 transform transition-transform hover:translate-y-[-5px] w-full md:w-[300px]">
          <div className="card-content p-4 bg-black text-white rounded-lg">
            <h3 className="text-xl mb-2">Dedicated Project Manager</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <img
            src="/assets/support.svg"
            alt="Project Manager"
            className="card-image w-full h-auto rounded-lg mt-4"
          />
          <div className="card-content p-4 bg-black text-white rounded-lg mt-4">
            <h3 className="text-xl mb-2">24 × 7 Round-the-clock Support</h3>
            <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div> 
        </div>

        
        <div className="benefit-card bg-gray-100 rounded-lg overflow-hidden shadow-lg p-4 transform transition-transform hover:translate-y-[-5px] w-full md:w-[300px]">
          <img
            src="/assets/satisfaction.svg"
            alt="Customer Satisfaction"
            className="card-image w-full h-auto rounded-lg"
          />
          <div className="card-content mt-4 p-4 bg-black text-white rounded-lg">
            <h3 className="text-xl mb-2">100% Customer Satisfaction</h3>
            <p className="text-gray-400 text-sm">Our top priority is ensuring every customer leaves with a smile.</p>
          </div>
          <div className="card-content p-4 bg-black text-white rounded-lg mt-4">
            <h3 className="text-xl mb-2">Escrow Account</h3>
            <p className="text-gray-400 text-sm">Keeping your money safe with escrow services. Lorem ipsum lorem ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

