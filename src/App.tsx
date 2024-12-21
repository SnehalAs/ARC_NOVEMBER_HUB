import React from 'react';
import Navbar from './pages/navbar/navbar';
import Footer from './pages/Footer/Footer';
import HeroSection from './pages/herosection/herosection';
import Benefits from './pages/benifits/benifits';
import StatsSection from './pages/StatsSection/StatsSection';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import BigEnough from './pages/BigEnough/BigEnough';
import Testimonial from './pages/Testimonial/Testimonial';
import CTA from './pages/CTA/CTA';
import BlogSection from './pages/BlogSection/BlogSection';

const App: React.FC = () => {
  return (
    <>
   
      {/* <nav className="bg-teal-100 p-4">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          <li>
            <a href="#home" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#benefits" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Benefits
            </a>
          </li>
          <li>
            <a href="#stats" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Stats
            </a>
          </li>
          <li>
            <a href="#case-study" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Case Study
            </a>
          </li>
          <li>
            <a href="#big-enough" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Big Enough
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#cta" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              CTA
            </a>
          </li>
          <li>
            <a href="#blog" className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300">
              Blog
            </a>
          </li>
        </ul>
      </nav> */}
      <Navbar />

      {/* Sections */}
      <div id="home" className="py-10">
        <HeroSection />
      </div>
      <div id="benefits" className="py-10">
        <Benefits />
      </div>
      <div id="stats" className="py-10">
        <StatsSection />
      </div>
      <div id="case-study" className="py-10">
        <CaseStudy />
      </div>
      <div id="big-enough" className="py-10">
        <BigEnough />
      </div>
      <div id="testimonials" className="py-10">
        <Testimonial />
      </div>
      <div id="cta" className="py-10">
        <CTA />
      </div>
      <div id="blog" className="py-10">
        <BlogSection />
      </div>

      <Footer />
    </>
  );
};

export default App;
