import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
     
      <nav className="bg-teal-100 p-4">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
          <li>
            <Link
              to="/"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/benefits"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Stats
            </Link>
          </li>
          <li>
            <Link
              to="/case-study"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Case Study
            </Link>
          </li>
          <li>
            <Link
              to="/big-enough"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Big Enough
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/cta"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              CTA
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-black text-sm md:text-base hover:text-white hover:bg-gray-600 px-3 md:px-4 py-2 rounded transition duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/stats" element={<StatsSection />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/big-enough" element={<BigEnough />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/cta" element={<CTA />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route
          path="*"
          element={<h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
