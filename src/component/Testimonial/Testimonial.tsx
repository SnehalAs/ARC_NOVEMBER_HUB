import React, { useRef } from "react";

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX: number, scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
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
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  let touchStartX: number, touchScrollLeft: number;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    touchScrollLeft = sliderRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - touchStartX) * 2;
    sliderRef.current.scrollLeft = touchScrollLeft - walk;
  };

  return (
    <>
      <div className="text-center my-8">
        <p className="text-lg text-gray-600">3940+ Happy Hubnex Labs Users</p>
        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          Driving results for leaders across the globe
        </h1>
      </div>
      <div
        className="relative flex overflow-x-auto max-w-5xl mx-auto bg-white rounded-lg scrollbar-hide"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Slack Testimonial */}
        <div className="flex-shrink-0 w-full flex items-center px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 flex justify-center items-center mb-4 lg:mb-0">
              <img
                src="/assets/slack-logo.svg"
                alt="Slack logo"
                className="w-full max-w-xs"
              />
            </div>
            <div className="flex-1 text-left p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Driving results for leaders across the globe
              </h2>
              <p className="text-gray-600 mb-4">
                "With Landingfolio, the design team can now build design which
                identifies employees' career aspirations and goals and from
                which we approach managers and check to see what is happening."
              </p>
              <h1 className="text-lg font-bold mt-4">Slack</h1>
              <p className="text-gray-500">Product Company</p>
            </div>
          </div>
        </div>

        {/* Facebook Testimonial */}
        <div className="flex-shrink-0 w-full flex items-center px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 flex justify-center items-center mb-4 lg:mb-0">
              <img
                src="/assets/facebook.svg"
                alt="Facebook logo"
                className="w-full max-w-xs"
              />
            </div>
            <div className="flex-1 text-left p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Driving results for leaders across the globe
              </h2>
              <p className="text-gray-600 mb-4">
                "With Landingfolio, the design team can now build design which
                identifies employees' career aspirations and goals and from
                which we approach managers and check to see what is happening."
              </p>
              <h1 className="text-lg font-bold mt-4">Facebook</h1>
              <p className="text-gray-500">Tech Company</p>
            </div>
          </div>
        </div>

        {/* Google Testimonial */}
        <div className="flex-shrink-0 w-full flex items-center px-8 py-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-shrink-0 flex justify-center items-center mb-4 lg:mb-0">
              <img
                src="/assets/google.svg"
                alt="Google logo"
                className="w-full max-w-xs"
              />
            </div>
            <div className="flex-1 text-left p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Driving results for leaders across the globe
              </h2>
              <p className="text-gray-600 mb-4">
                "With Landingfolio, the design team can now build design which
                identifies employees' career aspirations and goals and from
                which we approach managers and check to see what is happening."
              </p>
              <h1 className="text-lg font-bold mt-4">Google</h1>
              <p className="text-gray-500">Search Engine Giant</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
