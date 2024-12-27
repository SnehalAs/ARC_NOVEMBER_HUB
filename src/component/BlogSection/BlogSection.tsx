import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";

const blogs = [
  {
    tag: "Finance",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/support.svg",
  },
  {
    tag: "Business",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
  {
    tag: "Marketing",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/support.svg",
  },
  {
    tag: "Finance",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/support.svg",
  },
  {
    tag: "Business",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/business1.svg",
  },
  {
    tag: "Marketing",
    title: "What is Ad Exposure and Why It Matters?",
    description:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
    image: "/assets/support.svg",
  },
];

const BlogSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-900 text-center py-12">
      
      <h2 className="text-white text-4xl font-bold">Blogs</h2>
      <p className="text-gray-300 mt-2">Explore the impact we've delivered</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        View All →
      </button>

     
      <div className="relative mt-10 max-w-6xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex-none w-[45%] sm:w-[48%] lg:w-[32%] p-2"
              >
                <div className="bg-white rounded-lg shadow-md p-5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="rounded-lg mb-4"
                  />
                  <div>
                    <div className="flex justify-start gap-2 items-center">
                      <span className="text-sm font-semibold text-black border border-red-400 bg-white px-2 py-1 rounded-md">
                        {blog.tag}
                      </span>
                    </div>
                    <h3 className="text-xl mt-2 text-left">{blog.title}</h3>
                    <p className="text-gray-600 mt-2 text-left">
                      {blog.description}
                    </p>
                    <div className="flex justify-start mt-3">
                      <a
                        href="#"
                        className="text-black font-medium inline-block hover:underline"
                      >
                        Read more{" "}
                        <RxArrowTopRight className="inline-block lg:ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-400"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
