import { Routes, Route } from 'react-router-dom';
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
