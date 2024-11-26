import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { RxArrowTopRight } from "react-icons/rx";

import "./BlogSection.css";

const items = [
  {
    tags: "FINANCE",
    titles: "What is Ad Exposure and Why It Matters?",
    descriptions: "Ad exposure impacts user engagement and brand growth. Learn why it matters.",
    images: "src/assets/support.svg",
  },
  {
    tags: "BUSINESS",
    titles: "Unlocking New Business Opportunities",
    descriptions: "Discover strategies to tap into new markets and grow your business effectively.",
    images: "src/assets/business1.svg",
  },
  {
    tags: "MARKETING",
    titles: "Innovative Tech Solutions",
    descriptions: "Explore the latest advancements in technology and their business impact.",
    images: "src/assets/support.svg",
  },
  {
    tags: "TECH",
    titles: "AI in Modern Business",
    descriptions: "Learn how AI is transforming industries worldwide.",
    images: "src/assets/support.svg",
  },
  {
    tags: "MARKETING",
    titles: "Innovative Tech Solutions",
    descriptions: "Explore the latest advancements in technology and their business impact.",
    images: "src/assets/business1.svg",
  },
  {
    tags: "TECH",
    titles: "AI in Modern Business",
    descriptions: "Learn how AI is transforming industries worldwide.",
    images: "src/assets/support.svg",
  },
];

const BlogSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

 
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <section className="case-study-sections">
      <div className="case-study-headers">
        <h1>Blogs</h1>
        <p>
        Explore the impact we've delivered
        </p>
        <button className="connect-sales-buttons">View All →</button>
      </div>

      <div className="carousels">
        <div className="emblas" ref={emblaRef}>
          <div className="embla__containers">
            {groupedItems.map((group, groupIndex) => (
              <div className="embla__slides" key={groupIndex}>
                {group.map((item, index) => (
                  // <div
                  //   className="card"
                  //   key={index}
                  //   style={{
                  //     backgroundImage: `url(${item.image})`,
                  //     backgroundSize: "cover",
                  //     backgroundPosition: "center",
                  //   }}
                  // >
                  //   <div className="tag">{item.tag}</div>
                  //   <div className="card-content">
                  //     <h3>{item.title}</h3>
                  //     <p>{item.description}</p>
                  //     <a href="#" className="read-more">
                  //       Read more →
                  //     </a>
                  //   </div>
                  // </div>

                  <div className="cards" key={index} style={{
                    backgroundImage: `url(${item.images})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}>
                    <div className="card-contents">
                      <div className="tags">{item.tags}</div>
                      <h3>{item.titles}</h3>
                      <p>{item.descriptions}</p>
                      <a href="#" className="read-mores">Read more <RxArrowTopRight /></a>
                    </div>
                  </div>
                  
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={scrollPrev} className="carousel-buttons">
            ←
          </button>
          <button onClick={scrollNext} className="carousel-buttons">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 
