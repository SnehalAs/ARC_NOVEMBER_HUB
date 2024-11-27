import { Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Footer from './component/Footer/Footer';
import HeroSection from './component/herosection/herosection';
import Benefits from './component/benifits/benifits';
import StatsSection from './component/StatsSection/StatsSection';
import CaseStudy from './component/CaseStudy/CaseStudy';
import BigEnough from './component/BigEnough/BigEnough';
import Testimonial from './component/Testimonial/Testimonial';
import CTA from './component/CTA/CTA';
import BlogSection from './component/BlogSection/BlogSection';

const App = () => {
  return (
    <> 
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
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
