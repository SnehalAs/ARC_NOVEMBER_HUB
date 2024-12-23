import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";

const items = [
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "assets/business1.svg",
  },
  {
    tag: "BUSINESS",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "assets/business1.svg",
  },
  {
    tag: "MARKETING",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "assets/business1.svg",
  },
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "assets/business1.svg",
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
        <h1 className="text-4xl font-bold mb-4">Case Study</h1>
        <p className="text-lg sm:text-xl mb-6 mx-4 sm:mx-8 lg:mx-48">
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </p>
        <button className="mt-6 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
          View All →
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto mt-10">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 transition-transform duration-300">
            {items.map((item, index) => (
              <div
                className="flex-shrink-0 w-[calc(50%-0.5rem)] box-border"
                key={index}
              >
                <div className="relative bg-black rounded-lg shadow-lg min-h-[450px]">
                  <img
                    src={item.image}
                    alt="Blog Image"
                    className="w-full h-[280px] object-cover rounded-t-lg"
                  />
                  <span className="absolute top-1 right-1 text-lg font-semibold text-white bg-black bg-opacity-80 px-4 py-2 rounded-full">
                    {item.tag}
                  </span>
                  <div className="p-4">
                    <h3 className="text-2xl text-white font-semibold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-white text-md mt-1">
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

      
        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={scrollPrev}
            className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-500"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-400"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
