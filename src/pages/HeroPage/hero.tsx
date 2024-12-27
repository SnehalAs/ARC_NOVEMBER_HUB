import React from 'react';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/Footer/Footer';
import HeroSection from '../../component/herosection/herosection';
import Benefits from '../../component/benifits/benifits';
import StatsSection from '../../component/StatsSection/StatsSection';
import CaseStudy from '../../component/CaseStudy/CaseStudy';
import BigEnough from '../../component/BigEnough/BigEnough';
import Testimonial from '../../component/Testimonial/Testimonial';
import CTA from '../../component/CTA/CTA';
import BlogSection from '../../component/BlogSection/BlogSection';
import Accomplish from '../../component/Footer/Accomplish';

const Hero: React.FC = () => {
  return (
    <>
    <Navbar />
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
      <div id="accomplish" className="py-10">
        <Accomplish />
      </div>

      <Footer />
    </>
  );
};

export default Hero;
