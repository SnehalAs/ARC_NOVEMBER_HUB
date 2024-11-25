import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./BlogSection.css";

const items = [
  {
    tag: "FINANCE",
    title: "What is Ad Exposure and Why It Matters?",
    description: "Ad exposure impacts user engagement and brand growth. Learn why it matters.",
    image: "src/assets/support.svg",
  },
  {
    tag: "BUSINESS",
    title: "Unlocking New Business Opportunities",
    description: "Discover strategies to tap into new markets and grow your business effectively.",
    image: "src/assets/business1.svg",
  },
  {
    tag: "MARKETING",
    title: "Innovative Tech Solutions",
    description: "Explore the latest advancements in technology and their business impact.",
    image: "src/assets/support.svg",
  },
  {
    tag: "TECH",
    title: "AI in Modern Business",
    description: "Learn how AI is transforming industries worldwide.",
    image: "src/assets/support.svg",
  },
  {
    tag: "MARKETING",
    title: "Innovative Tech Solutions",
    description: "Explore the latest advancements in technology and their business impact.",
    image: "src/assets/business1.svg",
  },
  {
    tag: "TECH",
    title: "AI in Modern Business",
    description: "Learn how AI is transforming industries worldwide.",
    image: "src/assets/support.svg",
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
    <section className="case-study-section">
      <div className="case-study-header">
        <h1>Blogs</h1>
        <p>
        Explore the impact we've delivered
        </p>
        <button className="connect-sales-button">View All →</button>
      </div>

      <div className="carousel">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {groupedItems.map((group, groupIndex) => (
              <div className="embla__slide" key={groupIndex}>
                {group.map((item, index) => (
                  <div
                    className="card"
                    key={index}
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
                ))}
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

export default BlogSection;
