import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";
import "./BlogSection.css";

const items = [
  {
    tags: "Finance",
    titles: "What is Ad Exposure and Why It Matters?",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/support.svg",
  },
  {
    tags: "Business",
    titles: "What is Ad Exposure and Why It Matters?",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/business1.svg",
  },
  {
    tags: "Marketing",
    titles: "What is Ad Exposure and Why It Matters?",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/support.svg",
  },
  {
    tags: "Finance",
    titles: "What is Ad Exposure and Why It Matters?",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/support.svg",
  },
  {
    tags: "Business",
    titles: "The Importance of Brand Awareness in 2024",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/business1.svg",
  },
  {
    tags: "Marketing",
    titles: "Top Digital Strategies for Small Businesses",
    descriptions: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    images: "/assets/support.svg",
  },
];

const BlogSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="bg-gradient-to-b from-blue-800 to-black py-16">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Blogs</h1>
        <p className="text-lg max-w-xl mx-auto mt-4">
          Explore the impact we've delivered
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
          View All →
        </button>
      </div>

      <div className="relative max-w-6xl mx-auto mt-10">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="bg-white rounded-lg shadow-lg">
                  <img
                    src={item.images}
                    alt="Blog Image"
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 text-lg font-semibold text-black bg-white border-2 border-red-300 rounded-lg">
                      {item.tags}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{item.titles}</h3>
                    <p className="text-gray-950 text-md mt-1">
                      {item.descriptions}
                    </p>
                    <a
                      href="#"
                      className="flex items-center gap-1 text-black font-medium mt-3 hover:underline"
                    >
                      Read More <RxArrowTopRight />
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

export default BlogSection;
