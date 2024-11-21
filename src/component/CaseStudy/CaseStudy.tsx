import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./CaseStudy.css";

const items = [
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Ad exposure impacts user engagement and brand growth. Learn why it matters.",
    image: "src/assets/business1.svg", // Replace with your actual image path
  },
  {
    tag: "BUSINESS",
    title: "Unlocking New Business Opportunities",
    description: "Discover strategies to tap into new markets and grow your business effectively.",
    image: "src/assets/business1.svg", // Replace with your actual image path
  },
];

const CaseStudy: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="case-study-section">
      <div className="case-study-header">
        <h1>Case Study</h1>
        <p>
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </p>
        <button className="connect-sales-button">View All →</button>
      </div>

      <div className="carousel">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {items.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div
                  className="card"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="tag">{item.tag}</div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href="#" className="read-more">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={scrollPrev} className="carousel-button">
            ←
          </button>
          <button onClick={scrollNext} className="carousel-button">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;