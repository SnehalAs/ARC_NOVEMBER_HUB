import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";
import "./CaseStudy.css";

const items = [
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
  {
    tag: "BUSINESS",
    title: "The Importance of Brand Awareness in 2024",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
  {
    tag: "MARKETING",
    title: "Top Digital Strategies for Small Businesses",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
];

const CaseStudy: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 2, 
    align: "start", 
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-gradient-to-b from-blue-800 to-black py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Case Study</h1>
    
          <p className="text-lg  mx-auto mt-4">
      We guide global businesses through the challenges of developing purposeful technology that addresses their needs and{" "}
      <span className="block mt-2">advances their growth. We have established offices in India, the UAE, and the USA.</span>
    </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
          View All →
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto mt-10">
       
        <div className="emblas" ref={emblaRef}>
          <div className="embla__containers">
            {items.map((item, index) => (
              <div className="embla__slides" key={index}>
                <div className="relative bg-black rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt="Blog Image"
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                 
                  <span className="tag-top-right text-lg  bg-black text-white rounded-lg">
                    {item.tag}
                  </span>
                  <div className="p-4">
                    <h3 className="text-lg text-white font-semibold mt-2">{item.title}</h3>
                    <p className="text-white text-sm mt-1">
                      {item.description}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-white font-medium mt-3 hover:underline"
                    >
                      Read Full Article <RxArrowTopRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

