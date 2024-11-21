// import React from "react";
// import "./Testimonial.css";

// const Testimonial: React.FC = () => {
//   return (
//     <section className="testimonial">
//       <p className="testimonial-subtitle">3940+ Happy Hubnex Labs Users</p>
//       <h2 className="testimonial-title">Driving results for leaders across the globe</h2>
      
//       <div className="testimonial-author">
//         <img
//           src="src\assets\Slack-Logo.png" // Replace with the Slack logo
//           alt="Slack logo"
//           className="testimonial-logo"
//         />
//         <div>
//         <h2 className="testimonial-title">Driving results for leaders across the globe</h2>
      
//         <blockquote className="testimonial-quote">
//         “People now recognise that having a good performance conversation means
//         that something happens as a result. People now recognise that having a good performance conversation means
//         that something happens as a result. People now recognise that having a good performance conversation means
//         that something happens as a result”
//       </blockquote>
//           <strong>Slack</strong>
//           <p>Product Company</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
// //

/** @format */
import React, { useRef } from "react";
import "./Testimonial.css";

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number, scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only proceed if left mouse button is pressed
    isDragging = true;
    startX = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className='slider-main-heading'>
        <p>3940+ Happy Hubnex Labs Users</p>
        <h1>Driving results for leaders across the globe</h1>
      </div>
      <div
        className='slider-container'
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className='slider-item'>
          <div className='left'>
            <img src='src\assets\slack-logo.svg' alt='' />
          </div>
          <div className='right'>
            <h1>Driving results for leaders across the globe</h1>
            <p>
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </p>
            <h1>Slack</h1>
            <p>Product Company</p>
          </div>
        </div>
        <div className='slider-item'>
          <div className='left'>
            <img src='src\assets\facebook.svg' alt='' />
          </div>
          <div className='right'>
            <h1>Driving results for leaders across the globe</h1>
            <p>
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </p>
            <h1>Facebook</h1>
            <p>Product Company</p>
          </div>
        </div>
        <div className='slider-item'>
          <div className='left'>
            <img src='src\assets\google.svg' alt='' />
          </div>
          <div className='right'>
            <h1>Driving results for leaders across the globe</h1>
            <p>
              “With Landingfolio, the design team can now build design which
              identifies employees’ career aspirations and goals and from which
              we approach managers and check to see what is happening.”
            </p>
            <h1>Google</h1>
            <p>Product Company</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
